pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                 nodejs(nodeJSInstallationName: 'nodejs-23.5.0') {
                    sh 'npm install'
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
}
}
