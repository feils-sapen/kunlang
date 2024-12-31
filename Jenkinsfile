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

        stage('推送') {
            steps {
                echo '推送'
                script {
                   withCredentials([
                    usernamePassword(
                        credentialsId: 'kunlang-registry', 
                        passwordVariable: 'password', 
                        usernameVariable: 'username')
                        ]) {
                     sh 'docker login -u ${username} -p ${password} kunlang-registry.sapenlei.xyz'
                     sh 'docker push kunlang-registry.sapenlei.xyz/kunlang-node:latest'
                     sh 'docker logout'
                   }
                   
                   
                }
            }
        }
    }
        
}

