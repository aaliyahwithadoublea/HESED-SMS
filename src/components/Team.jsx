import React from 'react';
import team1 from '../assets/team1.png'
import team2 from '../assets/team2.png'
import team3 from '../assets/team3.png'
import team4 from '../assets/team4.png'
import team5 from '../assets/team5.png'
import team6 from '../assets/team6.png'
import btn from '../assets/btn.png'

// TeamMember Component
const TeamMember = ({ name, title, image }) => {
  return (
    <div className="text-center">
      <img src={image} alt={name} className="w-32 h-32 object-cover rounded-full mx-auto" />
      <h3 className="mt-4 text-lg font-bold">{name}</h3>
      <p className="text-gray-600">{title}</p>
    </div>
  );
};

// Team Component
const Team = () => {
  const teamMembers = [
    {
      name: 'Matthew Odu',
      title: 'CEO',
      image: team1
    },
    {
      name: 'Olujamoke Quadri',
      title: 'Admin. Manager',
      image: team2
    },
    {
      name: 'Sunday Dallan',
      title: 'Business Development Officer',
      image: team3
    },
    {
      name: 'Sarah Johnson',
      title: 'Marketing Director',
      image: team4
    },
    {
      name: 'Michael Smith',
      title: 'Lead Developer',
      image: team5
    },
    {
      name: 'Emily Davis',
      title: 'UX/UI Designer',
      image: team6
    },
  ];

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Behind Every Success Story is a Dedicated Team</h2>
      <button style={{ marginLeft:"25rem"}}><img src={btn} style={{height:"2.5rem", margin:"0 auto"}}/> </button>
      <br/> <br/>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} name={member.name} title={member.title} image={member.image} />
        ))}
      </div>
    </div>
  );
};

export default Team;
