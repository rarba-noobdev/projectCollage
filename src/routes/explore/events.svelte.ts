interface EventType {
	id: number;
	name: string;
	startDate: string;
	endDate: string;
	time: string;
	price: number;
	department: string;
	color: string;
	location: string;
	maxSlots: number;
	bookedSlots: number;
	isSoldOut: boolean;
	description: string;
}

export const departmentColors = {
	Technology: '#3498db',
	Marketing: '#e74c3c',
	Finance: '#2ecc71',
	HumanResources: '#f39c12',
	Design: '#9b59b6',
	Operations: '#1abc9c',
	Sales: '#e67e22',
	Support: '#95a5a6'
};

export const events: EventType[] = [
	{
		id: 1,
		name: 'Tech Conference 2023',
		startDate: '2023-11-15',
		endDate: '2023-11-17',
		time: '09:00 AM',
		price: 199.99,
		department: 'Technology',
		color: departmentColors.Technology,
		location: 'Convention Center, Main Hall',
		maxSlots: 500,
		bookedSlots: 320,
		isSoldOut: false,
		description: 'Annual tech conference with workshops and networking.'
	},
	{
		id: 2,
		name: 'Marketing Workshop',
		startDate: '2023-12-05',
		endDate: '2023-12-05',
		time: '02:00 PM',
		price: 49.99,
		department: 'Marketing',
		color: departmentColors.Marketing,
		location: 'Downtown Business Hub',
		maxSlots: 100,
		bookedSlots: 100,
		isSoldOut: true,
		description: 'Hands-on session on digital marketing trends.'
	},
	{
		id: 3,
		name: 'Finance Seminar',
		startDate: '2024-01-20',
		endDate: '2024-01-21',
		time: '10:30 AM',
		price: 0,
		department: 'Finance',
		color: departmentColors.Finance,
		location: 'City Library Auditorium',
		maxSlots: 200,
		bookedSlots: 85,
		isSoldOut: false,
		description: 'Global markets and investment strategies.'
	},
	{
		id: 4,
		name: 'HR Leadership Summit',
		startDate: '2024-02-10',
		endDate: '2024-02-12',
		time: '08:00 AM',
		price: 129.99,
		department: 'HumanResources',
		color: departmentColors.HumanResources,
		location: 'Grand Hotel Ballroom',
		maxSlots: 150,
		bookedSlots: 120,
		isSoldOut: false,
		description: 'Developing leadership skills for HR professionals.'
	},
	{
		id: 5,
		name: 'Design Expo',
		startDate: '2024-03-15',
		endDate: '2024-03-17',
		time: '11:00 AM',
		price: 25.5,
		department: 'Design',
		color: departmentColors.Design,
		location: 'Modern Art Museum',
		maxSlots: 300,
		bookedSlots: 210,
		isSoldOut: false,
		description: 'Showcase of innovative design concepts.'
	},
	{
		id: 6,
		name: 'Sales Bootcamp',
		startDate: '2024-04-05',
		endDate: '2024-04-07',
		time: '09:30 AM',
		price: 179.99,
		department: 'Sales',
		color: departmentColors.Sales,
		location: 'Business Innovation Center',
		maxSlots: 80,
		bookedSlots: 65,
		isSoldOut: false,
		description: 'Intensive training for sales teams.'
	},
	{
		id: 7,
		name: 'Customer Support Symposium',
		startDate: '2024-05-10',
		endDate: '2024-05-10',
		time: '01:00 PM',
		price: 0,
		department: 'Support',
		color: departmentColors.Support,
		location: 'Online Event',
		maxSlots: 500,
		bookedSlots: 340,
		isSoldOut: false,
		description: 'Best practices in customer service excellence.'
	},
	{
		id: 8,
		name: 'Operations Optimization',
		startDate: '2024-06-18',
		endDate: '2024-06-19',
		time: '10:00 AM',
		price: 299.99,
		department: 'Operations',
		color: departmentColors.Operations,
		location: 'Conference Center West',
		maxSlots: 120,
		bookedSlots: 90,
		isSoldOut: false,
		description: 'Streamlining business operations for efficiency.'
	}
];
