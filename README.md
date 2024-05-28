# Healthcare-Application

Developed a full-stack healthcare app to streamline patient-doctor communication and medical record management. Used React, Node.js, and integrated AWS ASG to scale resources based on traffic demand, and set up a CI/CD  pipeline using Docker, GitHub, and AWS ECR, automating the build, testing, and deployment processes to ensure efficient application delivery.

## Frontend + Backend:

### `npm create-react-app healthcare-frontend`
### `cd healthcare-frontend`

Install Axios:

### `npm install axios`

Install express.js and CORS:

### `npm install express cors`

Run Frontend:

### `npm start`

Run Backend server:

### `node server.js`

Created Docker files inside both frontend and backend directories. Build Docker images inside respective directories:

### `docker build -t frontend .`
### `docker build -t backend .`

Push the frontend and backend code to your GitHub respository.

## CI/CD Configuration:
- Set Up AWS ECR by creating ECR Repositories: healthcare-frontend and healthcare-backend.
- Created two CodeBuild Projects (healthcare-frontend and healthcare-backend) to build Docker images and push them to ECR, and then, created AWS CodePipelines.
- In AWS ASG, created launch configuration and set up Auto Scaling Groups and added a new stage in existing AWS pipeline to deploy to ASG.
- Created necessary workflows for frontend, backend, and to trigger AWS pipeline.

