const EventEmitter = require('events'); // events module

// 1. If you want to create a custom event, you have to create a class and extend the class.
// 2. Or just create the instance if you have an event and just want to listen for it.

const customEmitter = new EventEmitter(); // instance of our class. 

// on - listen for an event
// emit - emit an event

// Event method on
customEmitter.on(
    'response', // make up name of event. ex: 'response'
    () => {
        console.log(`
        The name of this event is "response."

        The data has been recieved.

        Remember: Backticks respect white space.
        `);
    }
);

customEmitter.on('response', () => {
    console.log(`
    You can have as many functions as you want listening for this event, the event name you created, made up.
    `);
});

// We can have as many events of the same name or different names as we want.

// Important: The "emit" method for each event you create must be placed, run after all the on events related to it or nothing will happen regarding the function(s) in that/those on event(s).

// Multiple arguments can be passed in the event: 
customEmitter.on(
    'canPassMultipleArguments',
    (name, id, age, likes) => {
        console.log(`
        ${name}'s id is ${id}, and he is ${age}, and he likes "${likes}."
            This is an example of how multiple arguments can be passed from .emit event to .on event.`);
    }
);
customEmitter.emit('canPassMultipleArguments', 'John', 34, 37, "Mint Ice-Cream");

// All the related .on methods for a single event do not have to have parameters to handle the arguments that are passed through .emit, only the .on methods that you want to handle those arguments have to have parameters for those arguments.

// My custom Event:
customEmitter.on(
    'myCustomEvent',
    () => {
        // alert('Yippee!'); // This doesn't work. ??
        console.log(`
        Yippee!
        `);
    }
);


// Event method emit
// Order Matters: This must go after all the functions declared in each on method!!!!
customEmitter.emit('response'); //This has to match the name of the event in on method.

customEmitter.emit('myCustomEvent');