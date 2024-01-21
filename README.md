# League of Legends Player Searchup

League of Legends Player Searchup is a web application that allows users to search for player information, including their summoner details, match history, and game statistics.

## Technologies Used

- **Frontend:** React.js
- **Backend:** Node.js, Express
- **Database:** MongoDB

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/try/download/community)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies:

   ```bash
   cd client
   npm install

   cd server
   npm install
   ```

3. Create .env file: 

  ```bash
  cd server
  touch .env
  ```

4. Add your Riot Developer API https://developer.riotgames.com/apis, and your MongoDB Atlas API

  ```bash
  riotAPIKey='your-api-here'
  port='4000'
  mongoURI = 'your-uri-here'
  ```


