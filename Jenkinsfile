pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install'  // For Windows, use `bat`. For Linux/macOS, use `sh`.
            }
        }
        stage('Run Tests') {
            steps {
                bat 'npm test'  // Same here for Windows; if Linux/macOS, use `sh`.
            }
        }
    }
}
