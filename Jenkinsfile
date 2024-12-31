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
                     sh 'docker buildx build --push --platform linux/amd64,linux/arm64 -t kunlang-registry.sapenlei.xyz/kunlang-node:latest ./'
                     sh 'docker logout'
                   }
                   
                   
                }
            }
        }

          stage('Deploy') {
            when  {
                branch 'main'
            }
            
            steps {
                echo '部署'
                  script {
            def ssh = 'ssh -o StrictHostKeyChecking=no -l root 8.219.53.244'
            try {
                sshagent(['aliyun-kunlang']) {
                    withCredentials(
                        [
                            usernamePassword(
                                credentialsId: 'kunlang-registry', 
                                passwordVariable: 'password',
                                 usernameVariable: 'username')
                                 ]) {
                        sh "$ssh docker login -u ${username} -p ${password} kunlang-registry.sapenlei.xyz"
                        sh "$ssh docker pull kunlang-registry.sapenlei.xyz/kunlang-node:latest"
                        sh "$ssh docker rm kunlang-node -f"
                        sh "$ssh docker run -d -p 3304:3000 --name kunlang-node kunlang-registry.sapenlei.xyz/kunlang-node:latest"
                }
                }
            } catch (Exception e) {
                echo "部署失败 ${e.message}"
                currentBuild.result = 'FAILURE'
            }
           } 
            }
        }

       
    }
        
}
    


