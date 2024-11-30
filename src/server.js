import cors from 'cors';
import express from 'express';
const app = express();

const port = 5000;

app.use(cors());

let rules = [
    {
        id: 1,
        name: 'Temperature Rule',
        description: 'IF Current Temperature is > Greater than 10, THEN send an E-mail to mainaddress@gmail.com',
        devices: 'QingPing, Device name',
        active: true,
    },
    // Add more dummy rules if needed
];

// Get all rules
app.get('/api/rules', (req, res) => {
    res.json(rules);
});

// Update rule status
app.put('/api/rules/:id', (req, res) => {
    const { id } = req.params;
    const { active } = req.body;
    rules = rules.map(rule => (rule.id == id ? { ...rule, active } : rule));
    res.json({ success: true });
});

// Add new rule
app.post('/api/rules', (req, res) => {
    const newRule = req.body;
    rules.push(newRule);
    res.json({ success: true });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});