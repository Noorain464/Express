const express = require('express');
const app = express();

app.use(express.json());
let courses = [
    {id: 1, name:"java"},
    {id: 2, name:"javascript"},
    {id: 3, name:"python"},
];

app.get('/courses',(req,res)=>{
    res.json(courses);
});

app.post('/courses', (req, res) => {
    console.log(req.body);
    let singleCourse = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(singleCourse);
    res.send(courses);
});

app.put('/courses/:id',(req,res)=>{
    const courseId = parseInt(req.params.id,10); 
    const course = courses.find(c => c.id === courseId);
    course.name = req.body.name;
    res.json(course);
})


app.listen(3000,()=>{
    console.log("Server started");
})
