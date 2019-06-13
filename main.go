package main

import (
	"log"
	// "os"
	"sync"
	"strconv"

	"github.com/zserge/lorca"
	"github.com/gen2brain/beeep"
)

// Go types that are bound to the UI must be thread-safe, because each binding
// is executed in its own goroutine. In this simple case we may use atomic
// operations, but for more complex cases one should use proper synchronization.
type counter struct {
	sync.Mutex
	count int
}

func (c *counter) Add(n int) {
	c.Lock()
	defer c.Unlock()
	countString := strconv.Itoa(c.count+n)
	err := beeep.Notify("Current value", countString, "")
	if err != nil {
		panic(err)
	}
	c.count = c.count + n
}

func (c *counter) Value() int {
	c.Lock()
	defer c.Unlock()
	return c.count
}


func main() {

	// Create UI with basic HTML passed via data URI
	ui, err := lorca.New("http://localhost:3001", "/tmp", 480, 320)

	// A simple way to know when UI is ready (uses body.onload event in JS)
	ui.Bind("start", func() {
		log.Println("UI is ready")
	})

	// Create and bind Go object to the UI
	c := &counter{}
	ui.Bind("counterAdd", c.Add)
	ui.Bind("counterValue", c.Value)

	if err != nil {
		log.Fatal(err)
	}
	defer ui.Close()

	// Wait until UI window is closed
	<-ui.Done()
}