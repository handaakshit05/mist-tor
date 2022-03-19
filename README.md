# MIST Tor Website
The official tor website for MIST, made by and for the members of Manipal Information and Security Team. 

![Tor Logo](https://github.com/Parthiv-M/mist-tor/blob/master/github_resources/wallpaper.jpg?raw=true)


## Requirements
For this project to work on your computer, you need to set up the following:
- Node.JS
- Node Package Manager (NPM)

If you don't have it, you can head over [here](https://nodejs.org/en/) to install it from the official page.

## Installation Process
Start this project by cloning the git repository using 

### Step 1: Cloning the repository to your local system
For beginners, using windows, it is advised to use GitHub Desktop. 
- **GitHub Desktop**   
- **Command Line Interface** using ```git clone https://github.com/Parthiv-M/mist-tor```

### Step 2: Get Familiar
The ```package.json``` file contains details of all the dependencies that your website requires. In this project, there are three ```package.json``` files because there are three servers working together simulateously. The ```package.json``` file are for the following:
- **ReactJS**: This is the frontend of the project. All visual elements are rendered by this library.
- **NodeJS**: If you know what an API is, this one serves the exact purpose for our frontend. All data communication from the database to the fronend is done using this server
- **The other one**: The third package.json file is the one that is responsible for starting the other two servers.

### Step 3: Install the dependencies
Now, it's time to install the dependencies from the ```package.json``` files. 
1. Wherever you cloned the repository, navigate to that folder using your terminal/command prompt. Now move into the directory using ```cd mist-tor```. This is the **root** folder of the project. You should have reached the folder with following files and folder:

![Root Folder](https://github.com/Parthiv-M/mist-tor/blob/master/github_resources/root_folder.png?raw=true)


2. Now install all the dependencies by typing the command ```yarn install```. If Node.JS and NPM were correctly installed, you should see a progress bar in the command screen.
3. Now this is done. Two more to go. Using your terminal/command prompt move into the ```client``` folder using ```cd client```.  This folder contains **ReactJS** files. The destination folder should have the following folders and files:

![Frontend Folder](https://github.com/Parthiv-M/mist-tor/blob/master/github_resources/client_folder.png?raw=true)


4. Repeat _Step 2_ to install the dependencies. 

![Vulnerabilities Error](https://github.com/Parthiv-M/mist-tor/blob/master/github_resources/audit_fix.png?raw=true)

5. Now that your files are downloaded, one more ```package.json``` file remains. Go back to your **root** folder by typing ```cd ..``` in the same terminal. Now navigate in to the ```backend``` folder using the command ```cd backend```. This folder contains the server of the project. The destination folder should have the following files:

![Backend Folder](https://github.com/Parthiv-M/mist-tor/blob/master/github_resources/backend_folder.png?raw=true)


6. Repeat _Step 2_ to install the dependencies.
7. Now you have installed all the dependencies successfully. Now go back to the **root** folder using ```cd ..``` and then finally ```yarn start```. Now don't do anything. Your react app will run automatically on ```http://localhost:3000``` and it will be communicating with the backend NodeJS running on ```http://localhost:3001```.


### Step 4: Coding
Everything is installed, so now you can start coding. Whenever you want to run the project, just type ```yarn start``` in the root folder. The best thing about React is that it refreshes automatically when you make changes to the code and save it. Same goes with the backend Node.JS server because it uses _nodemon_. Happy hacking!

Once you have read this long README.md, resume your work!
