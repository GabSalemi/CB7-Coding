import "./index.css"

const Todo = () => {
    
   const Todos = [
        {
        id: 1,
        todo: "Do something nice for someone I care about",
        completed: true,
        user: 26
        },
        {
        id: 2,
        todo: "Memorize the fifty states and their capitals",
        completed: false,
        user: 48
        },
        {
        id: 3,
        todo: "Watch a classic movie",
        completed: false,
        user: 4
        },
        {
        id: 4,
        todo: "Contribute code or a monetary donation to an open-source software project",
        completed: false,
        user: 48
        },
        {
        id: 5,
        todo: "Solve a Rubik's cube",
        completed: false,
        user: 31
        },
        {
        id: 6,
        todo: "Bake pastries for me and neighbor",
        completed: false,
        user: 39
        },
        {
        id: 7,
        todo: "Go see a Broadway production",
        completed: false,
        user: 32
        },
        {
        id: 8,
        todo: "Write a thank you letter to an influential person in my life",
        completed: true,
        user: 13
        },
        {
        id: 9,
        todo: "Invite some friends over for a game night",
        completed: false,
        user: 47
        },
        {
        id: 10,
        todo: "Have a football scrimmage with some friends",
        completed: false,
        user: 19
        },
        {
        id: 11,
        todo: "Text a friend I haven't talked to in a long time",
        completed: false,
        user: 39
        },
        {
        id: 12,
        todo: "Organize pantry",
        completed: true,
        user: 39
        },
        {
        id: 13,
        todo: "Buy a new house decoration",
        completed: false,
        user: 16
        },
        {
        id: 14,
        todo: "Plan a vacation I've always wanted to take",
        completed: false,
        user: 28
        },
        {
        id: 15,
        todo: "Clean out car",
        completed: false,
        user: 33
        },
        {
        id: 16,
        todo: "Draw and color a Mandala",
        completed: true,
        user: 24
        },
        {
        id: 17,
        todo: "Create a cookbook with favorite recipes",
        completed: false,
        user: 1
        },
        {
        id: 18,
        todo: "Bake a pie with some friends",
        completed: false,
        user: 1
        },
        {
        id: 19,
        todo: "Create a compost pile",
        completed: true,
        user: 5
        },
        {
        id: 20,
        todo: "Take a hike at a local park",
        completed: true,
        user: 43
        },
        {
        id: 21,
        todo: "Take a class at local community center that interests you",
        completed: false,
        user: 22
        },
        {
        id: 22,
        todo: "Research a topic interested in",
        completed: false,
        user: 4
        },
        {
        id: 23,
        todo: "Plan a trip to another country",
        completed: true,
        user: 37
        },
        {
        id: 24,
        todo: "Improve touch typing",
        completed: false,
        user: 45
        },
        {
        id: 25,
        todo: "Learn Express.js",
        completed: false,
        user: 49
        },
        {
        id: 26,
        todo: "Learn calligraphy",
        completed: false,
        user: 50
        },
        {
        id: 27,
        todo: "Have a photo session with some friends",
        completed: false,
        userId: 14
        },
        {
        id: 28,
        todo: "Go to the gym",
        completed: false,
        userId: 15
        },
        {
        id: 29,
        todo: "Make own LEGO creation",
        completed: false,
        userId: 30
        },
        {
        id: 30,
        todo: "Take cat on a walk",
        completed: false,
        userId: 15
        }
    ]


    return (
        <div className="Todos">
            {Todos.map((element) => (<div className="todo__element" key={element.id}>
                    <h3>{element.todo}</h3>
                    {element.completed === true ? <div className="done"></div> : null}
            </div>))}
        </div>
    )
}

export default Todo