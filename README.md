# Nginx Reverse Proxy with Docker

This project demonstrates the use of Nginx as a reverse proxy for three Node.js applications running in Docker containers. The applications are accessible via HTTP and HTTPS, with automatic redirection from HTTP to HTTPS. The project also uses self-signed SSL certificates for secure connections.


## Prerequisites

To run this project, you need to have the following installed on your machine:

- Docker
- Docker Compose
- OpenSSL (for generating self-signed SSL certificates)


## Project Structure

The project contains the following components:

- **Dockerfile**: Defines how the Node.js application is built and run inside the Docker container.
- **docker-compose.yml**: Defines and runs multi-container Docker applications, including the Node.js apps and Nginx as the reverse proxy.
- **nginx.conf**: Nginx configuration file that sets up a reverse proxy to the Node.js applications.
- **SSL Certificates**: Self-signed SSL certificates for secure HTTPS connections.

## Setup Instructions

### 1. Clone the Repository

Clone the repository to your local machine.

```bash
git clone <repository-url>
cd <repository-folder>
```

### 2. Generate SSL Certificates
If you don't have SSL certificates, generate them using OpenSSL with the following command:

```bash
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout nginx-selfsigned.key -out nginx-selfsigned.crt
```

### 3. Configure Nginx

The project includes a preconfigured `nginx.conf` file that defines how Nginx will handle requests and forward them to the appropriate Node.js apps.

- **Proxy Configuration**: The Nginx reverse proxy is set up to forward requests to the Node.js applications running on ports 3001, 3002, and 3003.
- **SSL Setup**: The Nginx configuration also handles HTTPS connections using the self-signed SSL certificates that you generated in the previous step.

Make sure that the paths to your SSL certificates are correct in `nginx.conf`.

### 3. Build and Run the Docker Containers
Start the containers using Docker Compose:

```bash
docker-compose up --build -d
```
This command will build the Node.js apps and start the containers for app1, app2, app3, and nginx (as the reverse proxy).


## Project Details

- **Node.js App**: Each Node.js app listens on ports 3001, 3002, and 3003 inside their respective containers. The apps are proxied via Nginx.
- **Nginx**: Nginx listens on ports 8080 (HTTP) and 443 (HTTPS). It proxies incoming requests to the Node.js applications based on load balancing.


## Nginx Configuration

The Nginx configuration file (`nginx.conf`) is set up to:

- Handle SSL connections.
- Proxy requests to the Node.js applications.
- Redirect HTTP traffic to HTTPS.

  
## Acknowledgements

This project was inspired by the tutorial from TechWorld with Nana. A special thanks to the creator for the detailed guide on setting up Nginx as a reverse proxy for Node.js applications with Docker.

You can watch the tutorial here: [TechWorld with Nana - Nginx Reverse Proxy with Docker](https://www.youtube.com/watch?v=q8OleYuqntY)
