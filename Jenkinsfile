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
                echo 'Deploying.......****'
            }
        }
        stage('镜像') {
            steps {
                echo '镜像'
                sh 'docker build -t kunlang-registry.sapenlei.xyz/kunlang-node:latest .'
            }
        }
        
}
}
