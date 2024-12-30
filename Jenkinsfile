pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building..****'
                 nodejs(nodeJSInstallationName: 'nodejs-23.5.0') {
                    sh 'npm install'
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                  nodejs(nodeJSInstallationName: 'nodejs-23.5.0') {
                    sh 'npm run test:run'
                }
            }
        }
        stage('Deploy') {
            when  {
                branch 'main'
            }
            steps {
                echo 'Deploying.......&&&~~&&'
            }
        }
        
}
}
