import roverPost from './roverPost';

// Content accepts plain paragraphs or structured article blocks.

const posts = [
  roverPost,

  {
    slug: 'Control Theory for Robotics: A Beginner’s Guide',
    title: 'Control Theory for Robotics: A Beginner’s Guide',
    date: 'August 2026',
    excerpt:
      'An introduction to control theory with a focus on robotics applications.',
    content: [
      'Control theory is a fundamental concept in robotics that deals with the behavior of dynamical systems.',
      'In this post, we will explore the basics of control theory and how it applies to robotics.',
      'More soon.',
    ],
  },

  {
    slug: 'how-bacnet-mstp-allowed-me-to-learn-plcs-more-intuitively',
    title: 'How BACnet/MSTP allowed me to learn PLCs more intuitively',
    date: 'June 2026',
    excerpt:
      'Uncanny similarities between Building Automation Systems and time-dependent behaviors.',
    content: [
      'For my first co-op term, I was working as an Automation Intern at Voyager Controls, a building automation company. This was different from my previous work with robotics and embedded systems, but I was excited to learn about a new domain.',
      'The first similarity is simply the concept of control systems. In both cases, we have some inputs that are processed and produce outputs that affect the system. In robotics, we might have sensors that provide feedback to a controller, which then adjusts the actuators to achieve a desired state. In building automation, we have sensors that monitor temperature, humidity, and occupancy, which inform the control of HVAC systems.',
      'More soon.',
    ],
  },
];

export function getPost(slug) {
  return posts.find((post) => post.slug === slug);
}

export default posts;
