# Portfolio Website - CI/CD Pipeline with Docker & GitHub Actions

## Overview

This project is a personal portfolio website containerized using Docker and automated with a CI/CD pipeline using GitHub Actions and Docker Hub.

The pipeline automatically builds a Docker image and pushes it to Docker Hub whenever changes are pushed to the GitHub repository.

---

## Technologies Used

* React.js
* Vite
* Docker
* Docker Hub
* GitHub Actions
* Git & GitHub

---

## Project Structure

```text
Portfolio-second/
│
├── src/
├── public/
├── Dockerfile
├── package.json
├── README.md
└── .github/
    └── workflows/
        └── docker-ci.yml
```

---

## CI/CD Workflow

### Continuous Integration (CI)

Whenever code is pushed to the `main` branch:

1. GitHub Actions is triggered.
2. Source code is checked out.
3. Docker image is built.
4. Docker image is tagged.

### Continuous Delivery (CD)

After successful image creation:

1. GitHub Actions logs into Docker Hub.
2. Docker image is pushed automatically.
3. The latest version becomes available for deployment.

---

## Docker Hub Repository

Docker Image:

```text
prakash078/portfolio-second
```

Pull the latest image:

```bash
docker pull prakash078/portfolio-second:latest
```

Run the container:

```bash
docker run -d -p 8080:80 prakash078/portfolio-second:latest
```

---

## GitHub Actions Workflow

Workflow file location:

```text
.github/workflows/docker-ci.yml
```

Pipeline Steps:

* Checkout Code
* Login to Docker Hub
* Build Docker Image
* Push Docker Image

---

## Local Development

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Build project:

```bash
npm run build
```

---

## Learning Outcomes

Through this project, I learned:

* Docker containerization
* Docker Hub image management
* GitHub Actions workflows
* CI/CD pipeline implementation
* Secure secret management using GitHub Secrets
* DevOps best practices

---

## Author

Prakash Kumar Mallik

Cloud Computing & DevOps Intern

GitHub: https://github.com/YOUR_GITHUB_USERNAME
