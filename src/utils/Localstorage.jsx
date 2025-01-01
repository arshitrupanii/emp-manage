const employees = [
    {
        "id": 1,
        "firstName": "Arjun",
        "email": "e@e.com",
        "password": "123",
        "taskCounts": {
            "active": 2,    // Corrected value
            "newTask": 1,   // Corrected value
            "completed": 2, // Corrected value
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Update website",
                "taskDescription": "Revamp the homepage design to improve user engagement and navigation.",
                "taskDate": "2024-10-12",
                "category": "high"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Client meeting",
                "taskDescription": "Discuss project requirements and timelines with the client.",
                "taskDate": "2024-10-10",
                "category": "high"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Fix bugs",
                "taskDescription": "Resolve bugs in the issue tracker.",
                "taskDate": "2024-10-14",
                "category": "medium"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Backend integration",
                "taskDescription": "Integrate the new APIs into the application.",
                "taskDate": "2024-10-15",
                "category": "high"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Deploy updates",
                "taskDescription": "Deploy the latest features to the production server.",
                "taskDate": "2024-10-09",
                "category": "medium"
            }
        ]
    },
    {
        "id": 2,
        "firstName": "Sneha",
        "email": "employee2@example.com",
        "password": "123",
        "taskCounts": {
            "active": 2,    // Corrected value
            "newTask": 1,   // Corrected value
            "completed": 1, // Corrected value
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Database optimization",
                "taskDescription": "Optimize queries for better performance.",
                "taskDate": "2024-10-11",
                "category": "high"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Design new feature",
                "taskDescription": "Create wireframes for the new feature.",
                "taskDate": "2024-10-09",
                "category": "medium"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Security audit",
                "taskDescription": "Perform a security audit of the application.",
                "taskDate": "2024-10-13",
                "category": "high"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Code refactoring",
                "taskDescription": "Refactor legacy code for maintainability.",
                "taskDate": "2024-10-15",
                "category": "medium"
            }
        ]
    },
    {
        "id": 3,
        "firstName": "Ravi",
        "email": "employee3@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,    // Corrected value
            "newTask": 2,   // Corrected value
            "completed": 1, // Corrected value
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Prepare presentation",
                "taskDescription": "Prepare slides for the client presentation.",
                "taskDate": "2024-10-13",
                "category": "medium"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Code review",
                "taskDescription": "Review code for optimization opportunities.",
                "taskDate": "2024-10-12",
                "category": "high"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Testing",
                "taskDescription": "Perform testing for the new module.",
                "taskDate": "2024-10-08",
                "category": "low"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "DevOps setup",
                "taskDescription": "Set up the CI/CD pipeline.",
                "taskDate": "2024-10-15",
                "category": "high"
            }
        ]
    },
    {
        "id": 4,
        "firstName": "Priya",
        "email": "employee4@example.com",
        "password": "123",
        "taskCounts": {
            "active": 2,    // Corrected value
            "newTask": 1,   // Corrected value
            "completed": 0, // Corrected value
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Write documentation",
                "taskDescription": "Update the project documentation.",
                "taskDate": "2024-10-13",
                "category": "medium"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Set up CI/CD",
                "taskDescription": "Implement the CI/CD pipeline.",
                "taskDate": "2024-10-11",
                "category": "high"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Feedback collection",
                "taskDescription": "Collect feedback from end-users.",
                "taskDate": "2024-10-14",
                "category": "low"
            }
        ]
    },
    {
        "id": 5,
        "firstName": "Karan",
        "email": "employee5@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,    // Corrected value
            "newTask": 2,   // Corrected value
            "completed": 1, // Corrected value
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "UI redesign",
                "taskDescription": "Redesign the user interface for better UX.",
                "taskDate": "2024-10-14",
                "category": "high"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Deploy new build",
                "taskDescription": "Deploy the latest build to production.",
                "taskDate": "2024-10-09",
                "category": "medium"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Client feedback",
                "taskDescription": "Gather feedback after launch.",
                "taskDate": "2024-10-12",
                "category": "low"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Mobile app optimization",
                "taskDescription": "Improve performance of the mobile app.",
                "taskDate": "2024-10-16",
                "category": "high"
            }
        ]
    }
];




const admin = [
    {
        "id": 1,
        "firstName": "HR",
        "email": "admin@example.com",
        "password": "123"
    },
    {
        "id": 2,
        "firstName": "HR1",
        "email": "admin1@example.com",
        "password": "123"
    }
]


export const setlocalstorage = ()=>{
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}

export const getlocalstorage = ()=>{
    const admin = JSON.parse(localStorage.getItem('admin'));
    const employees = JSON.parse(localStorage.getItem('employees'));
    return {admin,employees};
}