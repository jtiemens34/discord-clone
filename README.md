# Discord Clone
<img src="https://raw.githubusercontent.com/jtiemens34/discord-clone/working/readme_images/screenshot.png" alt="Screenshot of a text channel" width="500" />
Full stack recreation of [Discord](https://discord.com/) to explore using the following tech stack:
- Next.js 13
  - App routing and custom API definition and calling
- Node.js
  - Backend for Next.js
- React
  - For reusable components
- Tailwind
  - For ease of styling
- TypeScript
  - For better control over data types in component definitions
- MySQL
  - For storing users, profiles, servers, channels, and messages
- Prisma
  - For IDE integration for database schemas
- LiveKit
  - For Video and Audio calls within channels
- Clerk
  - For user authentication and middleware
- UploadThing
  - For uploading server icon pictures

# Usage
- Navigate to [my deployment](https://ele-discord-clone.up.railway.app/) of the application.
- Sign up or log in using the Clerk API
  - Use the following credentials if you don't want to register for your own account
  - `email`: clerk@test.dev
  - `password`: clerkpassword1234
  - TODO: Allow unsigned users to visit a demo server
- If logging in for the first time, customize your server
- Use the navigation bar on the left side of the screen to either navigate to or create a server
- Use the navigation menu just to the right of the server navigation to create (if you are an admin) or navigate to the text, video, or audio channels within that server
- On the top of the channel navigation menu, if you click the name of the server, you'll see a dropdown menu that will allow you to manage the server by performing any of the following actions (if you are an admin)
  - Get an invite link to the server (or refresh and invalidate an old link)
  - Edit the server's settings by renaming or uploading a new image to use for the icon
  - Manage the members by either changing their roles or removing them from the server
  - Creating a new text/audio/video channel in the server
  - Deleting the server
- Join a text channel to send messages or upload images
- Join a voice or video channel to enter a conference call