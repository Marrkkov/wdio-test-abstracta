pipeline {
    agent any 
    environment {
        accessToken = ''
    }
    stages {
        stage('Invoke GitHub Actions Workflow and Get Result') {
            steps {
                script {
                    try {
                        
                        println("Step 1: Trigger the Workflow")
                        def curlCommand1 = """
                        curl --location "https://api.github.com/repos/Marrkkov/wdio-test-abstracta/actions/workflows/run_tests.yaml/dispatches"\
                        --header "Accept: application/vnd.github+json"\
                        --header "Authorization: Bearer ${accessToken}"\
                        --header "Content-Type: application/json"\
                        --data @payload.json
                        """
                        bat(curlCommand1)
                        
                    } catch (Exception e) {
                        echo "Failed to invoke GitHub Actions Workflow or retrieve results: ${e.getMessage()}"
                        currentBuild.result = 'FAILURE'
                    }
                }
            }
        }
    }
}
