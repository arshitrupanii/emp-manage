const employees = [
    {
        "id": 1,
        "firstName": "Arjun",
        "email": "e@e.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Update website",
                "taskDescription": "Revamp the homepage design to improve user engagement and navigation. Focus on optimizing loading speed, modernizing visuals, and ensuring accessibility compliance. This task involves working closely with designers and developers to implement changes efficiently while minimizing disruptions to the live environment.",
                "taskDate": "2024-10-12",
                "category": "high"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Client meeting",
                "taskDescription": "Discuss project requirements, timelines, and deliverables in detail with the client. Ensure clarity on expectations, address any questions or concerns, and propose solutions for potential challenges. This meeting aims to establish a solid foundation for successful project execution.",
                "taskDate": "2024-10-10",
                "category": "high"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Fix bugs",
                "taskDescription": "Resolve bugs reported in the issue tracker by analyzing root causes, debugging code, and testing fixes. Ensure all solutions meet performance and security standards. Collaborate with team members for code reviews and validation before final implementation.",
                "taskDate": "2024-10-14",
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
            "active": 1,
            "newTask": 0,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Database optimization",
                "taskDescription": "Optimize database queries to enhance overall application performance. Identify slow-performing queries, design efficient indexing strategies, and ensure database normalization. Collaborate with backend developers to implement changes and monitor improvements using appropriate metrics.",
                "taskDate": "2024-10-11",
                "category": "high"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Design new feature",
                "taskDescription": "Create detailed mockups and wireframes for the proposed feature. Focus on user-centric design principles to ensure the feature aligns with user needs and preferences. Collaborate with stakeholders to finalize designs and prepare for development.",
                "taskDate": "2024-10-09",
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
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Prepare presentation",
                "taskDescription": "Prepare visually engaging and informative slides for the upcoming client presentation. Focus on highlighting key project details, progress updates, and anticipated outcomes. Include charts, visuals, and key metrics to support the narrative effectively.",
                "taskDate": "2024-10-13",
                "category": "medium"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Code review",
                "taskDescription": "Review the codebase to identify opportunities for optimization, improved readability, and adherence to coding standards. Ensure that the code aligns with best practices and security guidelines. Provide constructive feedback to developers and suggest enhancements.",
                "taskDate": "2024-10-12",
                "category": "high"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Testing",
                "taskDescription": "Perform comprehensive testing of the latest build to identify bugs, performance issues, or inconsistencies. Develop test cases and execute them systematically. Document findings clearly and collaborate with developers to address identified issues.",
                "taskDate": "2024-10-08",
                "category": "low"
            }
        ]
    },
    {
        "id": 4,
        "firstName": "Priya",
        "email": "employee4@example.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 0,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Write documentation",
                "taskDescription": "Update project documentation to reflect recent changes and new features. Ensure the documentation is user-friendly, comprehensive, and accurate. This involves gathering inputs from the team and organizing the content logically for easy navigation.",
                "taskDate": "2024-10-13",
                "category": "medium"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Set up CI/CD",
                "taskDescription": "Implement a continuous integration and delivery pipeline to streamline development processes. Automate build, test, and deployment workflows to ensure reliability and faster delivery cycles. Collaborate with the DevOps team to ensure robust implementation.",
                "taskDate": "2024-10-11",
                "category": "high"
            }
        ]
    },
    {
        "id": 5,
        "firstName": "Karan",
        "email": "employee5@example.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "UI redesign",
                "taskDescription": "Redesign the user interface to enhance user experience and visual appeal. Focus on simplifying navigation, improving responsiveness, and aligning with the latest design trends. Work closely with developers to ensure design implementation adheres to specifications.",
                "taskDate": "2024-10-14",
                "category": "high"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Deploy new build",
                "taskDescription": "Deploy the latest software build to the production environment. Coordinate with the QA team to ensure that all tests are passed before deployment. Monitor post-deployment performance and address any arising issues promptly.",
                "taskDate": "2024-10-09",
                "category": "medium"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Client feedback",
                "taskDescription": "Gather detailed feedback from clients after the product launch. Organize feedback into actionable insights and prioritize them for the development team. Focus on identifying key areas for improvement and enhancing client satisfaction.",
                "taskDate": "2024-10-12",
                "category": "low"
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