

# Collaborative Editor

### A Simple Real-Time Text Editor for Group Projects 

**Collaborative Editor** is a basic real-time text editor built for teams and students who want to edit the same document together without sending files back and forth. It runs locally, works instantly, and brings shared editing features like live typing, syncing, and cursor visibility—just like Google Docs, but lightweight and offline-friendly.

## Why Use This?

Working on group assignments or code files often ends up in messy situations like:

* “Who has the latest version of the file?”
* “Wait, I think my part got overwritten!”
* “Let’s copy-paste changes… again.”

Collaborative Editor helps avoid all that by letting everyone work on the same text file at the same time—with no refreshes or merges needed.

Built especially for students who need:
 Real-time collaboration
 Instant syncing between users
 A simple setup that works on localhost

## Key Features

 Real-time shared text editing
 No database or login needed
 Local-first approach for privacy and speed
 Lightweight and easy to set up
 Great for group notes, coding practice, or pair writing

## Tech Stack

This project is built using beginner-friendly technologies:

**Frontend**

* React.js – handles the user interface
* CSS – styled with a vintage theme (like a typewriter!)

**Backend**

* Node.js with Express – serves the app and handles routes
* WebSocket – syncs changes live between all connected clients

## How to Run the Project

1. Clone the repo:

  
   git clone https://github.com/your-username/collaborative-editor.git  
   

2. Install dependencies:

   
   npm install  
   

3. Start the development server:

   
   npm run dev  
   

4. Open `http://localhost:3000` in the browser.
   Open the same URL in a second tab (or second device on the same network) to test real-time editing.

## When to Use It

 Group coding or writing assignments
 Study sessions and shared note-taking
 Hackathon projects
 Quick prototype demos with live editing

## Known Limitations

 Doesn’t save text after refreshing (yet)
 Anyone on the same network can access the editor
 No user identification (everyone looks the same)
 Works best on desktop – mobile support is limited

## Future Plans

 Add file save/load support
 Add simple authentication (user names/colors)
 Enable remote collaboration via hosted version
 Improve responsiveness for mobile users

## Final Words

Collaborative Editor is a simple real-time tool made for students who want a shared space to write and edit together without any fancy setup. It’s fast, clean, and focused on helping classmates collaborate effectively.


