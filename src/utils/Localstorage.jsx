const employee = [
    {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Prepare presentation slides",
                "date": "2024-12-30",
                "status": "in progress",
                "completed": false,
                "category": "Management"
            },
            {
                "title": "Organize team meeting",
                "date": "2024-12-31",
                "status": "pending",
                "completed": false,
                "category": "Planning"
            }
        ]
    },
    {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Code review for new feature",
                "date": "2024-12-30",
                "status": "completed",
                "completed": true,
                "category": "Development"
            },
            {
                "title": "Fix critical bugs",
                "date": "2024-12-31",
                "status": "in progress",
                "completed": false,
                "category": "Testing"
            }
        ]
    },
    {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Draft marketing plan",
                "date": "2024-12-29",
                "status": "pending",
                "completed": false,
                "category": "Marketing"
            },
            {
                "title": "Schedule social media posts",
                "date": "2024-12-30",
                "status": "in progress",
                "completed": false,
                "category": "Marketing"
            }
        ]
    },
    {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Update inventory records",
                "date": "2024-12-29",
                "status": "completed",
                "completed": true,
                "category": "Operations"
            },
            {
                "title": "Coordinate with suppliers",
                "date": "2024-12-30",
                "status": "in progress",
                "completed": false,
                "category": "Supply Chain"
            }
        ]
    },
    {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Develop customer feedback survey",
                "date": "2024-12-28",
                "status": "completed",
                "completed": true,
                "category": "Customer Service"
            },
            {
                "title": "Analyze survey responses",
                "date": "2024-12-29",
                "status": "pending",
                "completed": false,
                "category": "Analysis"
            }
        ]
    }
]


const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }
]


export const setlocalstorage = ()=>{
    localStorage.setItem('employee', JSON.stringify(employee));
    localStorage.setItem('admin', JSON.stringify(admin));
}

export const getlocalstorage = ()=>{
    const admin = JSON.parse(localStorage.getItem('admin'));
    const employee = JSON.parse(localStorage.getItem('employee'));
    return {admin,employee};
}