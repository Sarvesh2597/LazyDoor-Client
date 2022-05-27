import avatarImg2 from '../../../assets/images/users/avatar-9.jpg';
import avatarImg3 from '../../../assets/images/users/avatar-3.jpg';
import avatarImg4 from '../../../assets/images/users/avatar-4.jpg';
import avatarImg5 from '../../../assets/images/users/avatar-5.jpg';
import avatarImg6 from '../../../assets/images/users/avatar-6.jpg';


const todayTasks = [
    {
        id: 1,
        title: 'Sanket Rembhoktar',
        assigned_to: 'Arya Stark',
        assignee_avatar: avatarImg2,
        due_date: 'Today 10am',
        location: '16, Hillside Society, Baner, Pune - 144058',

        completed: false,
        priority: 'Ad-hoc',
        stage: 'Todo',
        checklists: [
            { id: 1, title: 'Find out the old contract documents', completed: false },
            { id: 2, title: 'Organize meeting sales associates to understand need in detail', completed: false },
            { id: 3, title: 'Make sure to cover every small details', completed: false }
        ],
        description: "<p>This is a task description with markup support</p><ul><li>Select a text to reveal the toolbar.</li><li>Edit rich document on-the-fly, so elastic!</li></ul><p>End of air-mode area</p>",
        attachments: [
            { id: 1, filename: 'sales-assets.zip', 'size': '2.3 MB' },
            { id: 2, filename: 'new-contarcts.docx', 'size': '1.3 MB' }
        ],
        comments: [
            { id: 1, author: 'Arya Stark', text: 'Should I review the last 3 years legal documents as well?', posted_on: '4:30am', author_avatar: avatarImg2 },
            { id: 2, author: 'Gary Somya', text: '@Arya FYI..I have created some general guidelines last year.', posted_on: '3:30am', author_avatar: avatarImg3 },
        ]
    },
    {
        id: 2,
        title: 'Sarvesh Rembhotkar',
        assigned_to: 'James B',
        assignee_avatar: avatarImg3,
        location: '16, Hillside Society, Baner, Pune - 144058',

        due_date: 'Today 4pm',
        completed: false,
        stage: 'In-progress',
        priority: 'Monday',
        checklists: [
            { id: 1, title: 'Find out the old contract documents', completed: false },
            { id: 2, title: 'Organize meeting sales associates to understand need in detail', completed: false },
            { id: 3, title: 'Make sure to cover every small details', completed: false }
        ],
        description: "<p>This is a task description with markup support</p><ul><li>Select a text to reveal the toolbar.</li><li>Edit rich document on-the-fly, so elastic!</li></ul><p>End of air-mode area</p>",
        attachments: [
            { id: 1, filename: 'sales-assets.zip', 'size': '2.3 MB' },
            { id: 2, filename: 'new-contarcts.docx', 'size': '1.3 MB' }
        ],
        comments: [
            { id: 1, author: 'Arya Stark', text: 'Should I review the last 3 years legal documents as well?', posted_on: '4:30am', author_avatar: avatarImg2 },
            { id: 2, author: 'Gary Somya', text: '@Arya FYI..I have created some general guidelines last year.', posted_on: '3:30am', author_avatar: avatarImg3 },
        ]
    },
    {
        id: 3,
        title: 'Shivkant Kadam',
        assigned_to: 'Kevin C',
        assignee_avatar: avatarImg4,
        location: '16, Hillside Society, Baner, Pune - 144058',

        due_date: 'Today 4pm',
        completed: false,
        stage: 'In-progress',
        priority: 'Monday',
        checklists: [
            { id: 1, title: 'Find out the old contract documents', completed: false },
            { id: 2, title: 'Organize meeting sales associates to understand need in detail', completed: false },
            { id: 3, title: 'Make sure to cover every small details', completed: false }
        ],
        description: "<p>This is a task description with markup support</p><ul><li>Select a text to reveal the toolbar.</li><li>Edit rich document on-the-fly, so elastic!</li></ul><p>End of air-mode area</p>",
        attachments: [
            { id: 1, filename: 'sales-assets.zip', 'size': '2.3 MB' },
            { id: 2, filename: 'new-contarcts.docx', 'size': '1.3 MB' }
        ],
        comments: [
            { id: 1, author: 'Arya Stark', text: 'Should I review the last 3 years legal documents as well?', posted_on: '4:30am', author_avatar: avatarImg2 },
            { id: 2, author: 'Gary Somya', text: '@Arya FYI..I have created some general guidelines last year.', posted_on: '3:30am', author_avatar: avatarImg3 },
        ]
    }
];

const upcomingTasks = [
    {
        id: 4,
        title: 'Prayag',
        assigned_to: 'Arya Stark',
        assignee_avatar: avatarImg2,
        due_date: 'Tomorrow 10am',
        location: '16, Hillside Society, Baner, Pune - 144058',

        stage: 'Todo',
        completed: false,
        priority: 'Daily',
        checklists: [
            { id: 1, title: 'Find out the old contract documents', completed: false },
            { id: 2, title: 'Organize meeting sales associates to understand need in detail', completed: false },
            { id: 3, title: 'Make sure to cover every small details', completed: false }
        ],
        description: "<p>This is a task description with markup support</p><ul><li>Select a text to reveal the toolbar.</li><li>Edit rich document on-the-fly, so elastic!</li></ul><p>End of air-mode area</p>",
        attachments: [
            { id: 1, filename: 'sales-assets.zip', 'size': '2.3 MB' },
            { id: 2, filename: 'new-contarcts.docx', 'size': '1.3 MB' }
        ],
        comments: [
            { id: 1, author: 'Arya Stark', text: 'Should I review the last 3 years legal documents as well?', posted_on: '4:30am', author_avatar: avatarImg2 },
            { id: 2, author: 'Gary Somya', text: '@Arya FYI..I have created some general guidelines last year.', posted_on: '3:30am', author_avatar: avatarImg3 },
        ]
    },
    {
        id: 5,
        title: 'Ganesh',
        assigned_to: 'James B',
        assignee_avatar: avatarImg5,
        due_date: '27 Aug 10am',
        location: '16, Hillside Society, Baner, Pune - 144058',

        completed: false,
        stage: 'Review',
        priority: 'Daily',
        checklists: [
            { id: 1, title: 'Find out the old contract documents', completed: false },
            { id: 2, title: 'Organize meeting sales associates to understand need in detail', completed: false },
            { id: 3, title: 'Make sure to cover every small details', completed: false }
        ],
        description: "<p>This is a task description with markup support</p><ul><li>Select a text to reveal the toolbar.</li><li>Edit rich document on-the-fly, so elastic!</li></ul><p>End of air-mode area</p>",
        attachments: [
            { id: 1, filename: 'sales-assets.zip', 'size': '2.3 MB' },
            { id: 2, filename: 'new-contarcts.docx', 'size': '1.3 MB' }
        ],
        comments: [
            { id: 1, author: 'Arya Stark', text: 'Should I review the last 3 years legal documents as well?', posted_on: '4:30am', author_avatar: avatarImg2 },
            { id: 2, author: 'Gary Somya', text: '@Arya FYI..I have created some general guidelines last year.', posted_on: '3:30am', author_avatar: avatarImg3 },
        ]
    },
    {
        id: 6,
        title: 'Abhishek Muley',
        assigned_to: 'Kevin C',
        assignee_avatar: avatarImg6,
        location: '16, Hillside Society, Baner, Pune - 144058',

        due_date: 'No Due Date',
        completed: false,
        stage: 'Review',
        priority: 'Monday',
        checklists: [
            { id: 1, title: 'Find out the old contract documents', completed: false },
            { id: 2, title: 'Organize meeting sales associates to understand need in detail', completed: false },
            { id: 3, title: 'Make sure to cover every small details', completed: false }
        ],
        description: "<p>This is a task description with markup support</p><ul><li>Select a text to reveal the toolbar.</li><li>Edit rich document on-the-fly, so elastic!</li></ul><p>End of air-mode area</p>",
        attachments: [
            { id: 1, filename: 'sales-assets.zip', 'size': '2.3 MB' },
            { id: 2, filename: 'new-contarcts.docx', 'size': '1.3 MB' }
        ],
        comments: [
            { id: 1, author: 'Arya Stark', text: 'Should I review the last 3 years legal documents as well?', posted_on: '4:30am', author_avatar: avatarImg2 },
            { id: 2, author: 'Gary Somya', text: '@Arya FYI..I have created some general guidelines last year.', posted_on: '3:30am', author_avatar: avatarImg3 },
        ]
    }
];

const otherTasks = [
    {
        id: 7,
        title: 'C. Ronaldo',
        assigned_to: 'Arya Stark',
        assignee_avatar: avatarImg2,
        location: '16, Hillside Society, Baner, Pune - 144058',

        due_date: 'No Due Date',
        stage: 'Todo',
        completed: false,
        priority: 'Monday',
        checklists: [
            { id: 1, title: 'Find out the old contract documents', completed: false },
            { id: 2, title: 'Organize meeting sales associates to understand need in detail', completed: false },
            { id: 3, title: 'Make sure to cover every small details', completed: false }
        ],
        description: "<p>This is a task description with markup support</p><ul><li>Select a text to reveal the toolbar.</li><li>Edit rich document on-the-fly, so elastic!</li></ul><p>End of air-mode area</p>",
        attachments: [
            { id: 1, filename: 'sales-assets.zip', 'size': '2.3 MB' },
            { id: 2, filename: 'new-contarcts.docx', 'size': '1.3 MB' }
        ],
        comments: [
            { id: 1, author: 'Arya Stark', text: 'Should I review the last 3 years legal documents as well?', posted_on: '4:30am', author_avatar: avatarImg2 },
            { id: 2, author: 'Gary Somya', text: '@Arya FYI..I have created some general guidelines last year.', posted_on: '3:30am', author_avatar: avatarImg3 },
        ]
    },
    {
        id: 8,
        title: 'L. Messi',
        assigned_to: 'James B',
        assignee_avatar: avatarImg5,
        stage: 'Review',
        location: '16, Hillside Society, Baner, Pune - 144058',

        due_date: '30 Aug 10am',
        completed: false,
        priority: 'Daily',
        checklists: [
            { id: 1, title: 'Find out the old contract documents', completed: false },
            { id: 2, title: 'Organize meeting sales associates to understand need in detail', completed: false },
            { id: 3, title: 'Make sure to cover every small details', completed: false }
        ],
        description: "<p>This is a task description with markup support</p><ul><li>Select a text to reveal the toolbar.</li><li>Edit rich document on-the-fly, so elastic!</li></ul><p>End of air-mode area</p>",
        attachments: [
            { id: 1, filename: 'sales-assets.zip', 'size': '2.3 MB' },
            { id: 2, filename: 'new-contarcts.docx', 'size': '1.3 MB' }
        ],
        comments: [
            { id: 1, author: 'Arya Stark', text: 'Should I review the last 3 years legal documents as well?', posted_on: '4:30am', author_avatar: avatarImg2 },
            { id: 2, author: 'Gary Somya', text: '@Arya FYI..I have created some general guidelines last year.', posted_on: '3:30am', author_avatar: avatarImg3 },
        ]
    },
    {
        id: 9,
        title: 'M. Salah',
        assigned_to: 'Kevin C',
        assignee_avatar: avatarImg6,
        location: '16, Hillside Society, Baner, Pune - 144058',

        due_date: 'No Due Date',
        stage: 'Done',
        completed: false,
        priority: 'Monday',
        checklists: [
            { id: 1, title: 'Find out the old contract documents', completed: false },
            { id: 2, title: 'Organize meeting sales associates to understand need in detail', completed: false },
            { id: 3, title: 'Make sure to cover every small details', completed: false }
        ],
        description: "<p>This is a task description with markup support</p><ul><li>Select a text to reveal the toolbar.</li><li>Edit rich document on-the-fly, so elastic!</li></ul><p>End of air-mode area</p>",
        attachments: [
            { id: 1, filename: 'sales-assets.zip', 'size': '2.3 MB' },
            { id: 2, filename: 'new-contarcts.docx', 'size': '1.3 MB' }
        ],
        comments: [
            { id: 1, author: 'Arya Stark', text: 'Should I review the last 3 years legal documents as well?', posted_on: '4:30am', author_avatar: avatarImg2 },
            { id: 2, author: 'Gary Somya', text: '@Arya FYI..I have created some general guidelines last year.', posted_on: '3:30am', author_avatar: avatarImg3 },
        ]
    },
    {
        id: 10,
        title: 'A. Becker',
        assigned_to: 'Kevin C',
        assignee_avatar: avatarImg6,
        location: '16, Hillside Society, Baner, Pune - 144058',
        due_date: '2 Sep 10am',
        completed: false,
        stage: 'Done',
        priority: 'Monday',
        checklists: [
            { id: 1, title: 'Find out the old contract documents', completed: false },
            { id: 2, title: 'Organize meeting sales associates to understand need in detail', completed: false },
            { id: 3, title: 'Make sure to cover every small details', completed: false }
        ],
        description: "<p>This is a task description with markup support</p><ul><li>Select a text to reveal the toolbar.</li><li>Edit rich document on-the-fly, so elastic!</li></ul><p>End of air-mode area</p>",
        attachments: [
            { id: 1, filename: 'sales-assets.zip', 'size': '2.3 MB' },
            { id: 2, filename: 'new-contarcts.docx', 'size': '1.3 MB' }
        ],
        comments: [
            { id: 1, author: 'Arya Stark', text: 'Should I review the last 3 years legal documents as well?', posted_on: '4:30am', author_avatar: avatarImg2 },
            { id: 2, author: 'Gary Somya', text: '@Arya FYI..I have created some general guidelines last year.', posted_on: '3:30am', author_avatar: avatarImg3 },
        ]
    }
];

const allTasks = [...todayTasks, ...upcomingTasks, ...otherTasks];

export { todayTasks, upcomingTasks, otherTasks, allTasks };