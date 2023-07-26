'use client'
import React from 'react';
import './style.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

function Sidebar(props) {

    const sections = [
        { title: 'home', url: '/' },
        { title: 'about', url: '/about' },
        { title: 'experience', url: '/contact' },
        { title: 'projects', url: '/projects' },
    ]
    return (
        <nav className="sidebar-container">
            <div className='sidebar-body'>
            {sections.map((section, index) => (
                <a href={section.url}>
                    <strong>{index}. {section.title}</strong>
                </a>

            ))}
            </div>
            <div className="sidebar-footer">
            <a href="https://github.com/kelseyfranken" target='_blank'>
                <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/kelseyfranken/" target='_blank'>
                <LinkedInIcon />
            </a>
            <a href="mailto:kfrankenb@gmail.com">
                <EmailIcon />
            </a>
            </div>

        </nav>
    );
}

export default Sidebar;