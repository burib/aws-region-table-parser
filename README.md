# aws-region-table-parser [![CircleCI](https://circleci.com/gh/burib/aws-region-table-parser.svg?style=svg)](https://circleci.com/gh/burib/aws-region-table-parser)
Currently AWS has no public information about the number of services it provides and service per region availability.
This project is intended to provide a [human readable MARKDOWN](https://github.com/burib/aws-region-table-parser/blob/master/README.md) and a [machine readable JSON](https://raw.githubusercontent.com/burib/aws-region-table-parser/master/data/parseddata.json) format about the service and region statistics.


# Region Summary:  

### 207 Services

###  26 Regions 
### Region Summary # 
| Region Code | Region Name | no. of Supported Services | 
| ------ | -------- | -------- | 
us-east-1 | US East (N. Virginia) | 205
us-west-2 | US West (Oregon) | 199
eu-west-1 | Europe (Ireland) | 193
ap-southeast-2 | Asia Pacific (Sydney) | 187
ap-northeast-1 | Asia Pacific (Tokyo) | 187
eu-central-1 | Europe (Frankfurt) | 183
ap-southeast-1 | Asia Pacific (Singapore) | 179
us-east-2 | US East (Ohio) | 178
eu-west-2 | Europe (London) | 167
ap-northeast-2 | Asia Pacific (Seoul) | 164
ca-central-1 | Canada (Central) | 157
ap-south-1 | Asia Pacific (Mumbai) | 157
us-west-1 | US West (N. California) | 141
eu-north-1 | Europe (Stockholm) | 140
eu-west-3 | Europe (Paris) | 140
sa-east-1 | South America (Sao Paulo) | 139
ap-east-1 | Asia Pacific (Hong Kong) | 123
me-south-1 | Middle East (Bahrain) | 120
us-gov-west-1 | AWS GovCloud (US) | 119
eu-south-1 | Europe (Milan) | 111
af-south-1 | Africa (Cape Town) | 111
cn-north-1 | China (Beijing) | 99
ap-northeast-3 | Asia Pacific (Osaka-Local) | 99
cn-northwest-1 | China (Ningxia) | 98
us-gov-east-1 | AWS GovCloud (US-East) | 98
ap-southeast-3 |  Asia Pacific (Jakarta) | 69


### Number of Supported Services Per Region

<img src='https://quickchart.io/chart/render/sf-7d3fdc0a-2a92-46b7-a0cb-e6b5b7fa06d4'>

# Region and Service Table # 
| | ap-east-1 | ap-northeast-2 | ap-southeast-1 | ap-southeast-2 | ca-central-1 | eu-central-1 | eu-south-1 | me-south-1 | us-east-2 | us-west-2 | ap-northeast-1 | ap-south-1 | eu-north-1 | eu-west-1 | eu-west-2 | eu-west-3 | sa-east-1 | us-east-1 | us-west-1 | cn-northwest-1 | cn-north-1 | af-south-1 | ap-northeast-3 | ap-southeast-3 | us-gov-east-1 | us-gov-west-1 |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | -------------|
AWS Amplify|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS App Mesh|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS AppSync|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Application Discovery Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Application Migration Service (MGN)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Artifact|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Audit Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Auto Scaling|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Backup|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Batch|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Budgets|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Certificate Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Chatbot|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Cloud Map|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Cloud9|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CloudFormation|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CloudHSM|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CloudShell|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CloudTrail|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeArtifact|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeBuild|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeCommit|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeDeploy|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodePipeline|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeStar|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Compute Optimizer|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Config|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Control Tower|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Cost Explorer|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Cost and Usage Report|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Data Exchange|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Data Pipeline|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS DataSync|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Database Migration Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS DeepComposer|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS DeepLens|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS DeepRacer|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Device Farm|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Direct Connect|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Directory Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elastic Beanstalk|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elastic Disaster Recovery (DRS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaConnect|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaConvert|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaLive|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaPackage|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaStore|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaTailor|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Fargate|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Fault Injection Simulator|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Firewall Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Global Accelerator|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Glue|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Ground Station|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IQ|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Identity and Access Management (IAM)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT 1-Click|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Analytics|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Core|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Device Defender|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Device Management|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Events|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Greengrass|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT SiteWise|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Things Graph|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT TwinMaker|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Key Management Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Lake Formation|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Lambda|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS License Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Managed Services|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Marketplace|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Migration Hub|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Network Firewall|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS OpsWorks Stacks|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS OpsWorks for Chef Automate|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS OpsWorks for Puppet Enterprise|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Organizations|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Outposts|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Personal Health Dashboard|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS PrivateLink|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Proton|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Resilience Hub|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Resource Access Manager (RAM)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS RoboMaker|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Secrets Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Security Hub|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Server Migration Service (SMS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Serverless Application Repository|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Service Catalog|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Shield|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Single Sign-On|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Snowball|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Snowcone|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Snowmobile|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Step Functions|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Storage Gateway|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Support|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Systems Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Transfer Family|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Transit Gateway|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Trusted Advisor|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS VPN|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS WAF|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Well-Architected Tool|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS X-Ray|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Alexa for Business|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon API Gateway|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon AppFlow|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon AppStream 2.0|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Athena|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Augmented AI (A2I)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Aurora|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Braket|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Chime|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Cloud Directory|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon CloudFront|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon CloudSearch|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon CloudWatch|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon CodeGuru|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Cognito|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Comprehend|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Comprehend Medical|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Connect|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Detective|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon DevOps Guru|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon DocumentDB (with MongoDB compatibility)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon DynamoDB|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon EC2 Auto Scaling|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon ElastiCache|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Block Store (EBS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Compute Cloud (EC2)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Container Registry (ECR)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Container Service (ECS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic File System (EFS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Inference|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Kubernetes Service (EKS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic MapReduce (EMR)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Transcoder|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elasticsearch Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon EventBridge|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for Lustre|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for NetApp ONTAP|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for OpenZFS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for Windows File Server|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Forecast|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Fraud Detector|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon GameLift|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon GuardDuty|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon HealthLake|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Honeycode|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon IVS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Inspector|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kendra|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Keyspaces (for Apache Cassandra)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kinesis Data Analytics|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kinesis Data Firehose|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kinesis Data Streams|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kinesis Video Streams|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lex|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lightsail|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Location Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lookout for Metrics|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lookout for Vision|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lumberyard|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon MQ|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Macie|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Blockchain|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Grafana|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Service for Prometheus|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Streaming for Apache Kafka|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Workflows for Apache Airflow|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Neptune|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Nimble Studio|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Personalize|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Pinpoint|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Polly|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Quantum Ledger Database (QLDB)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon QuickSight|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon RDS on VMware|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Redshift|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Rekognition|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Relational Database Service (RDS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Route 53|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon SageMaker|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Email Service (SES)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Notification Service (SNS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Queue Service (SQS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Storage Service (S3)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Workflow Service (SWF)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Sumerian|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Textract|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Timestream|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Transcribe|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Transcribe Medical|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Translate|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Virtual Private Cloud (VPC)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon WorkDocs|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon WorkMail|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon WorkSpaces|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon WorkSpaces Application Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
CloudEndure Disaster Recovery|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
CloudEndure Migration|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Elastic Load Balancing|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
FreeRTOS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Red Hat OpenShift Service on AWS (ROSA)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
VMware Cloud on AWS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
### 207 Services

###  26 Regions 
### Region Summary # 
| Region Code | Region Name | no. of Supported Services | 
| ------ | -------- | -------- | 
us-east-1 | US East (N. Virginia) | 205
us-west-2 | US West (Oregon) | 199
eu-west-1 | Europe (Ireland) | 193
ap-southeast-2 | Asia Pacific (Sydney) | 187
ap-northeast-1 | Asia Pacific (Tokyo) | 187
eu-central-1 | Europe (Frankfurt) | 183
ap-southeast-1 | Asia Pacific (Singapore) | 179
us-east-2 | US East (Ohio) | 178
eu-west-2 | Europe (London) | 167
ap-northeast-2 | Asia Pacific (Seoul) | 164
ca-central-1 | Canada (Central) | 157
ap-south-1 | Asia Pacific (Mumbai) | 157
us-west-1 | US West (N. California) | 141
eu-north-1 | Europe (Stockholm) | 140
eu-west-3 | Europe (Paris) | 140
sa-east-1 | South America (Sao Paulo) | 139
ap-east-1 | Asia Pacific (Hong Kong) | 122
me-south-1 | Middle East (Bahrain) | 119
us-gov-west-1 | AWS GovCloud (US) | 119
eu-south-1 | Europe (Milan) | 110
af-south-1 | Africa (Cape Town) | 110
cn-north-1 | China (Beijing) | 99
cn-northwest-1 | China (Ningxia) | 98
ap-northeast-3 | Asia Pacific (Osaka-Local) | 98
us-gov-east-1 | AWS GovCloud (US-East) | 98
ap-southeast-3 |  Asia Pacific (Jakarta) | 69


### Number of Supported Services Per Region

<img src='https://quickchart.io/chart/render/sf-40ad9111-bb33-427c-ba20-8ad8f951f120'>

# Region and Service Table # 
| | ap-east-1 | ap-northeast-2 | ap-southeast-1 | ap-southeast-2 | ca-central-1 | eu-central-1 | eu-south-1 | me-south-1 | us-east-2 | us-west-2 | ap-northeast-1 | ap-south-1 | eu-north-1 | eu-west-1 | eu-west-2 | eu-west-3 | sa-east-1 | us-east-1 | us-west-1 | cn-northwest-1 | cn-north-1 | af-south-1 | ap-northeast-3 | ap-southeast-3 | us-gov-east-1 | us-gov-west-1 |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | -------------|
AWS Amplify|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS App Mesh|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS AppSync|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Application Discovery Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Application Migration Service (MGN)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Artifact|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Audit Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Auto Scaling|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Backup|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Batch|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Budgets|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Certificate Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Chatbot|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Cloud Map|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Cloud9|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CloudFormation|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CloudHSM|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CloudShell|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CloudTrail|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeArtifact|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeBuild|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeCommit|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeDeploy|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodePipeline|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeStar|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Compute Optimizer|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Config|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Control Tower|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Cost Explorer|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Cost and Usage Report|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Data Exchange|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Data Pipeline|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS DataSync|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Database Migration Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS DeepComposer|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS DeepLens|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS DeepRacer|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Device Farm|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Direct Connect|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Directory Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elastic Beanstalk|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elastic Disaster Recovery (DRS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaConnect|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaConvert|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaLive|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaPackage|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaStore|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaTailor|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Fargate|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Fault Injection Simulator|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Firewall Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Global Accelerator|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Glue|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Ground Station|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IQ|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Identity and Access Management (IAM)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT 1-Click|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Analytics|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Core|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Device Defender|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Device Management|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Events|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Greengrass|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT SiteWise|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Things Graph|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT TwinMaker|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Key Management Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Lake Formation|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Lambda|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS License Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Managed Services|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Marketplace|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Migration Hub|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Network Firewall|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS OpsWorks Stacks|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS OpsWorks for Chef Automate|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS OpsWorks for Puppet Enterprise|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Organizations|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Outposts|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Personal Health Dashboard|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS PrivateLink|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Proton|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Resilience Hub|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Resource Access Manager (RAM)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS RoboMaker|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Secrets Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Security Hub|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Server Migration Service (SMS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Serverless Application Repository|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Service Catalog|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Shield|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Single Sign-On|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Snowball|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Snowcone|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Snowmobile|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Step Functions|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Storage Gateway|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Support|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Systems Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Transfer Family|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Transit Gateway|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Trusted Advisor|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS VPN|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS WAF|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Well-Architected Tool|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS X-Ray|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Alexa for Business|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon API Gateway|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon AppFlow|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon AppStream 2.0|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Athena|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Augmented AI (A2I)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Aurora|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Braket|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Chime|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Cloud Directory|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon CloudFront|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon CloudSearch|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon CloudWatch|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon CodeGuru|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Cognito|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Comprehend|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Comprehend Medical|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Connect|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Detective|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon DevOps Guru|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon DocumentDB (with MongoDB compatibility)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon DynamoDB|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon EC2 Auto Scaling|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon ElastiCache|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Block Store (EBS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Compute Cloud (EC2)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Container Registry (ECR)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Container Service (ECS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic File System (EFS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Inference|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Kubernetes Service (EKS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic MapReduce (EMR)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Transcoder|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elasticsearch Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon EventBridge|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for Lustre|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for NetApp ONTAP|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for OpenZFS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for Windows File Server|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Forecast|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Fraud Detector|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon GameLift|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon GuardDuty|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon HealthLake|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Honeycode|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon IVS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Inspector|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kendra|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Keyspaces (for Apache Cassandra)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kinesis Data Analytics|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kinesis Data Firehose|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kinesis Data Streams|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kinesis Video Streams|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lex|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lightsail|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Location Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lookout for Metrics|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lookout for Vision|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lumberyard|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon MQ|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Macie|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Blockchain|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Grafana|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Service for Prometheus|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Streaming for Apache Kafka|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Workflows for Apache Airflow|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Neptune|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Nimble Studio|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Personalize|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Pinpoint|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Polly|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Quantum Ledger Database (QLDB)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon QuickSight|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon RDS on VMware|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Redshift|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Rekognition|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Relational Database Service (RDS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Route 53|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon SageMaker|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Email Service (SES)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Notification Service (SNS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Queue Service (SQS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Storage Service (S3)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Workflow Service (SWF)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Sumerian|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Textract|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Timestream|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Transcribe|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Transcribe Medical|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Translate|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Virtual Private Cloud (VPC)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon WorkDocs|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon WorkMail|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon WorkSpaces|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon WorkSpaces Application Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
CloudEndure Disaster Recovery|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
CloudEndure Migration|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Elastic Load Balancing|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
FreeRTOS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Red Hat OpenShift Service on AWS (ROSA)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
VMware Cloud on AWS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
### 207 Services

###  26 Regions 
### Region Summary # 
| Region Code | Region Name | no. of Supported Services | 
| ------ | -------- | -------- | 
us-east-1 | US East (N. Virginia) | 205
us-west-2 | US West (Oregon) | 199
eu-west-1 | Europe (Ireland) | 193
ap-southeast-2 | Asia Pacific (Sydney) | 187
ap-northeast-1 | Asia Pacific (Tokyo) | 187
eu-central-1 | Europe (Frankfurt) | 183
ap-southeast-1 | Asia Pacific (Singapore) | 179
us-east-2 | US East (Ohio) | 178
eu-west-2 | Europe (London) | 167
ap-northeast-2 | Asia Pacific (Seoul) | 164
ca-central-1 | Canada (Central) | 157
ap-south-1 | Asia Pacific (Mumbai) | 157
us-west-1 | US West (N. California) | 141
eu-north-1 | Europe (Stockholm) | 140
eu-west-3 | Europe (Paris) | 140
sa-east-1 | South America (Sao Paulo) | 139
ap-east-1 | Asia Pacific (Hong Kong) | 121
me-south-1 | Middle East (Bahrain) | 119
us-gov-west-1 | AWS GovCloud (US) | 119
eu-south-1 | Europe (Milan) | 110
af-south-1 | Africa (Cape Town) | 110
cn-north-1 | China (Beijing) | 99
cn-northwest-1 | China (Ningxia) | 98
ap-northeast-3 | Asia Pacific (Osaka-Local) | 98
us-gov-east-1 | AWS GovCloud (US-East) | 98
ap-southeast-3 |  Asia Pacific (Jakarta) | 69


### Number of Supported Services Per Region

<img src='https://quickchart.io/chart/render/sf-20ab1ecf-978c-4e2e-ad53-15cd6c14cf65'>

# Region and Service Table # 
| | ap-east-1 | ap-northeast-2 | ap-southeast-1 | ap-southeast-2 | ca-central-1 | eu-central-1 | eu-south-1 | me-south-1 | us-east-2 | us-west-2 | ap-northeast-1 | ap-south-1 | eu-north-1 | eu-west-1 | eu-west-2 | eu-west-3 | sa-east-1 | us-east-1 | us-west-1 | cn-northwest-1 | cn-north-1 | af-south-1 | ap-northeast-3 | ap-southeast-3 | us-gov-east-1 | us-gov-west-1 |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | -------------|
AWS Amplify|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS App Mesh|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS AppSync|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Application Discovery Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Application Migration Service (MGN)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Artifact|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Audit Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Auto Scaling|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Backup|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Batch|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Budgets|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Certificate Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Chatbot|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Cloud Map|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Cloud9|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CloudFormation|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CloudHSM|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CloudShell|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CloudTrail|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeArtifact|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeBuild|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeCommit|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeDeploy|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodePipeline|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeStar|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Compute Optimizer|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Config|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Control Tower|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Cost Explorer|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Cost and Usage Report|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Data Exchange|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Data Pipeline|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS DataSync|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Database Migration Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS DeepComposer|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS DeepLens|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS DeepRacer|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Device Farm|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Direct Connect|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Directory Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elastic Beanstalk|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elastic Disaster Recovery (DRS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaConnect|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaConvert|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaLive|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaPackage|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaStore|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaTailor|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Fargate|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Fault Injection Simulator|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Firewall Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Global Accelerator|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Glue|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Ground Station|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IQ|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Identity and Access Management (IAM)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT 1-Click|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Analytics|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Core|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Device Defender|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Device Management|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Events|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Greengrass|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT SiteWise|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Things Graph|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT TwinMaker|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Key Management Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Lake Formation|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Lambda|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS License Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Managed Services|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Marketplace|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Migration Hub|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Network Firewall|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS OpsWorks Stacks|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS OpsWorks for Chef Automate|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS OpsWorks for Puppet Enterprise|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Organizations|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Outposts|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Personal Health Dashboard|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS PrivateLink|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Proton|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Resilience Hub|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Resource Access Manager (RAM)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS RoboMaker|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Secrets Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Security Hub|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Server Migration Service (SMS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Serverless Application Repository|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Service Catalog|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Shield|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Single Sign-On|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Snowball|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Snowcone|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Snowmobile|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Step Functions|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Storage Gateway|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Support|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Systems Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Transfer Family|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Transit Gateway|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Trusted Advisor|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS VPN|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS WAF|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Well-Architected Tool|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS X-Ray|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Alexa for Business|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon API Gateway|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon AppFlow|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon AppStream 2.0|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Athena|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Augmented AI (A2I)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Aurora|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Braket|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Chime|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Cloud Directory|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon CloudFront|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon CloudSearch|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon CloudWatch|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon CodeGuru|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Cognito|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Comprehend|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Comprehend Medical|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Connect|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Detective|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon DevOps Guru|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon DocumentDB (with MongoDB compatibility)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon DynamoDB|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon EC2 Auto Scaling|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon ElastiCache|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Block Store (EBS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Compute Cloud (EC2)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Container Registry (ECR)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Container Service (ECS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic File System (EFS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Inference|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Kubernetes Service (EKS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic MapReduce (EMR)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Transcoder|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elasticsearch Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon EventBridge|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for Lustre|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for NetApp ONTAP|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for OpenZFS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for Windows File Server|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Forecast|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Fraud Detector|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon GameLift|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon GuardDuty|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon HealthLake|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Honeycode|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon IVS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Inspector|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kendra|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Keyspaces (for Apache Cassandra)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kinesis Data Analytics|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kinesis Data Firehose|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kinesis Data Streams|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kinesis Video Streams|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lex|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lightsail|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Location Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lookout for Metrics|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lookout for Vision|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lumberyard|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon MQ|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Macie|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Blockchain|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Grafana|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Service for Prometheus|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Streaming for Apache Kafka|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Workflows for Apache Airflow|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Neptune|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Nimble Studio|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Personalize|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Pinpoint|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Polly|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Quantum Ledger Database (QLDB)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon QuickSight|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon RDS on VMware|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Redshift|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Rekognition|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Relational Database Service (RDS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Route 53|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon SageMaker|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Email Service (SES)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Notification Service (SNS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Queue Service (SQS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Storage Service (S3)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Workflow Service (SWF)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Sumerian|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Textract|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Timestream|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Transcribe|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Transcribe Medical|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Translate|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Virtual Private Cloud (VPC)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon WorkDocs|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon WorkMail|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon WorkSpaces|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon WorkSpaces Application Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
CloudEndure Disaster Recovery|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
CloudEndure Migration|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Elastic Load Balancing|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
FreeRTOS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Red Hat OpenShift Service on AWS (ROSA)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
VMware Cloud on AWS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
### 207 Services

###  26 Regions 
### Region Summary # 
| Region Code | Region Name | no. of Supported Services | 
| ------ | -------- | -------- | 
us-east-1 | US East (N. Virginia) | 205
us-west-2 | US West (Oregon) | 199
eu-west-1 | Europe (Ireland) | 193
ap-southeast-2 | Asia Pacific (Sydney) | 187
ap-northeast-1 | Asia Pacific (Tokyo) | 187
eu-central-1 | Europe (Frankfurt) | 183
ap-southeast-1 | Asia Pacific (Singapore) | 179
us-east-2 | US East (Ohio) | 178
eu-west-2 | Europe (London) | 167
ap-northeast-2 | Asia Pacific (Seoul) | 164
ca-central-1 | Canada (Central) | 157
ap-south-1 | Asia Pacific (Mumbai) | 157
us-west-1 | US West (N. California) | 141
eu-north-1 | Europe (Stockholm) | 140
eu-west-3 | Europe (Paris) | 140
sa-east-1 | South America (Sao Paulo) | 139
ap-east-1 | Asia Pacific (Hong Kong) | 121
me-south-1 | Middle East (Bahrain) | 119
us-gov-west-1 | AWS GovCloud (US) | 119
eu-south-1 | Europe (Milan) | 110
af-south-1 | Africa (Cape Town) | 110
cn-north-1 | China (Beijing) | 99
cn-northwest-1 | China (Ningxia) | 98
us-gov-east-1 | AWS GovCloud (US-East) | 98
ap-northeast-3 | Asia Pacific (Osaka-Local) | 97
ap-southeast-3 |  Asia Pacific (Jakarta) | 67


### Number of Supported Services Per Region

<img src='https://quickchart.io/chart/render/sf-4e1e9fa2-6f27-47fc-bbdf-f7377672d3bb'>

# Region and Service Table # 
| | ap-east-1 | ap-northeast-2 | ap-southeast-1 | ap-southeast-2 | ca-central-1 | eu-central-1 | eu-south-1 | me-south-1 | us-east-2 | us-west-2 | ap-northeast-1 | ap-south-1 | eu-north-1 | eu-west-1 | eu-west-2 | eu-west-3 | sa-east-1 | us-east-1 | us-west-1 | cn-northwest-1 | cn-north-1 | af-south-1 | ap-northeast-3 | ap-southeast-3 | us-gov-east-1 | us-gov-west-1 |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | -------------|
AWS Amplify|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS App Mesh|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS AppSync|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Application Discovery Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Application Migration Service (MGN)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Artifact|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Audit Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Auto Scaling|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Backup|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Batch|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Budgets|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Certificate Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Chatbot|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Cloud Map|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Cloud9|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CloudFormation|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CloudHSM|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CloudShell|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CloudTrail|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeArtifact|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeBuild|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeCommit|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeDeploy|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodePipeline|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeStar|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Compute Optimizer|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Config|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Control Tower|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Cost Explorer|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Cost and Usage Report|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Data Exchange|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Data Pipeline|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS DataSync|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Database Migration Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS DeepComposer|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS DeepLens|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS DeepRacer|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Device Farm|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Direct Connect|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Directory Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elastic Beanstalk|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elastic Disaster Recovery (DRS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaConnect|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaConvert|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaLive|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaPackage|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaStore|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaTailor|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Fargate|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Fault Injection Simulator|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Firewall Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Global Accelerator|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Glue|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Ground Station|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IQ|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Identity and Access Management (IAM)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT 1-Click|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Analytics|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Core|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Device Defender|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Device Management|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Events|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Greengrass|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT SiteWise|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Things Graph|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT TwinMaker|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Key Management Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Lake Formation|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Lambda|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS License Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Managed Services|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Marketplace|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Migration Hub|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Network Firewall|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS OpsWorks Stacks|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS OpsWorks for Chef Automate|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS OpsWorks for Puppet Enterprise|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Organizations|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Outposts|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Personal Health Dashboard|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS PrivateLink|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Proton|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Resilience Hub|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Resource Access Manager (RAM)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS RoboMaker|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Secrets Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Security Hub|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Server Migration Service (SMS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Serverless Application Repository|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Service Catalog|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Shield|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Single Sign-On|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Snowball|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Snowcone|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Snowmobile|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Step Functions|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Storage Gateway|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Support|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Systems Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Transfer Family|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Transit Gateway|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Trusted Advisor|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS VPN|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS WAF|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Well-Architected Tool|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS X-Ray|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Alexa for Business|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon API Gateway|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon AppFlow|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon AppStream 2.0|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Athena|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Augmented AI (A2I)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Aurora|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Braket|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Chime|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Cloud Directory|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon CloudFront|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon CloudSearch|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon CloudWatch|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon CodeGuru|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Cognito|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Comprehend|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Comprehend Medical|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Connect|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Detective|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon DevOps Guru|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon DocumentDB (with MongoDB compatibility)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon DynamoDB|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon EC2 Auto Scaling|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon ElastiCache|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Block Store (EBS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Compute Cloud (EC2)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Container Registry (ECR)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Container Service (ECS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic File System (EFS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Inference|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Kubernetes Service (EKS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic MapReduce (EMR)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Transcoder|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elasticsearch Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon EventBridge|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for Lustre|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for NetApp ONTAP|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for OpenZFS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for Windows File Server|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Forecast|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Fraud Detector|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon GameLift|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon GuardDuty|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon HealthLake|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Honeycode|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon IVS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Inspector|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kendra|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Keyspaces (for Apache Cassandra)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kinesis Data Analytics|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kinesis Data Firehose|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kinesis Data Streams|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kinesis Video Streams|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lex|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lightsail|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Location Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lookout for Metrics|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lookout for Vision|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lumberyard|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon MQ|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Macie|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Blockchain|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Grafana|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Service for Prometheus|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Streaming for Apache Kafka|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Workflows for Apache Airflow|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Neptune|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Nimble Studio|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Personalize|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Pinpoint|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Polly|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Quantum Ledger Database (QLDB)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon QuickSight|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon RDS on VMware|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Redshift|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Rekognition|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Relational Database Service (RDS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Route 53|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon SageMaker|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Email Service (SES)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Notification Service (SNS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Queue Service (SQS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Storage Service (S3)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Workflow Service (SWF)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Sumerian|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Textract|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Timestream|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Transcribe|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Transcribe Medical|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Translate|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Virtual Private Cloud (VPC)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon WorkDocs|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon WorkMail|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon WorkSpaces|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon WorkSpaces Application Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
CloudEndure Disaster Recovery|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
CloudEndure Migration|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Elastic Load Balancing|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
FreeRTOS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Red Hat OpenShift Service on AWS (ROSA)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
VMware Cloud on AWS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
### 207 Services

###  26 Regions 
### Region Summary # 
| Region Code | Region Name | no. of Supported Services | 
| ------ | -------- | -------- | 
us-east-1 | US East (N. Virginia) | 205
us-west-2 | US West (Oregon) | 199
eu-west-1 | Europe (Ireland) | 193
ap-southeast-2 | Asia Pacific (Sydney) | 187
ap-northeast-1 | Asia Pacific (Tokyo) | 187
eu-central-1 | Europe (Frankfurt) | 183
ap-southeast-1 | Asia Pacific (Singapore) | 178
us-east-2 | US East (Ohio) | 178
eu-west-2 | Europe (London) | 167
ap-northeast-2 | Asia Pacific (Seoul) | 164
ca-central-1 | Canada (Central) | 157
ap-south-1 | Asia Pacific (Mumbai) | 157
us-west-1 | US West (N. California) | 141
eu-north-1 | Europe (Stockholm) | 140
eu-west-3 | Europe (Paris) | 140
sa-east-1 | South America (Sao Paulo) | 139
ap-east-1 | Asia Pacific (Hong Kong) | 121
me-south-1 | Middle East (Bahrain) | 119
us-gov-west-1 | AWS GovCloud (US) | 119
eu-south-1 | Europe (Milan) | 110
af-south-1 | Africa (Cape Town) | 110
cn-north-1 | China (Beijing) | 99
cn-northwest-1 | China (Ningxia) | 98
us-gov-east-1 | AWS GovCloud (US-East) | 98
ap-northeast-3 | Asia Pacific (Osaka-Local) | 97
ap-southeast-3 |  Asia Pacific (Jakarta) | 67


### Number of Supported Services Per Region

<img src='https://quickchart.io/chart/render/sf-5ecfe5fc-3a53-42b7-b51e-e7dcaee9b6a4'>

# Region and Service Table # 
| | ap-east-1 | ap-northeast-2 | ap-southeast-1 | ap-southeast-2 | ca-central-1 | eu-central-1 | eu-south-1 | me-south-1 | us-east-2 | us-west-2 | ap-northeast-1 | ap-south-1 | eu-north-1 | eu-west-1 | eu-west-2 | eu-west-3 | sa-east-1 | us-east-1 | us-west-1 | cn-northwest-1 | cn-north-1 | af-south-1 | ap-northeast-3 | ap-southeast-3 | us-gov-east-1 | us-gov-west-1 |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | -------------|
AWS Amplify|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS App Mesh|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS AppSync|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Application Discovery Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Application Migration Service (MGN)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Artifact|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Audit Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Auto Scaling|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Backup|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Batch|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Budgets|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Certificate Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Chatbot|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Cloud Map|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Cloud9|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CloudFormation|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CloudHSM|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CloudShell|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CloudTrail|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeArtifact|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeBuild|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeCommit|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeDeploy|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodePipeline|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeStar|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Compute Optimizer|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Config|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Control Tower|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Cost Explorer|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Cost and Usage Report|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Data Exchange|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Data Pipeline|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS DataSync|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Database Migration Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS DeepComposer|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS DeepLens|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS DeepRacer|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Device Farm|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Direct Connect|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Directory Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elastic Beanstalk|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elastic Disaster Recovery (DRS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaConnect|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaConvert|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaLive|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaPackage|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaStore|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaTailor|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Fargate|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Fault Injection Simulator|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Firewall Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Global Accelerator|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Glue|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Ground Station|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IQ|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Identity and Access Management (IAM)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT 1-Click|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Analytics|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Core|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Device Defender|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Device Management|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Events|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Greengrass|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT SiteWise|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Things Graph|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT TwinMaker|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Key Management Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Lake Formation|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Lambda|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS License Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Managed Services|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Marketplace|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Migration Hub|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Network Firewall|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS OpsWorks Stacks|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS OpsWorks for Chef Automate|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS OpsWorks for Puppet Enterprise|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Organizations|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Outposts|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Personal Health Dashboard|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS PrivateLink|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Proton|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Resilience Hub|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Resource Access Manager (RAM)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS RoboMaker|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Secrets Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Security Hub|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Server Migration Service (SMS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Serverless Application Repository|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Service Catalog|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Shield|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Single Sign-On|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Snowball|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Snowcone|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Snowmobile|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Step Functions|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Storage Gateway|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Support|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Systems Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Transfer Family|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Transit Gateway|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Trusted Advisor|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS VPN|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS WAF|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Well-Architected Tool|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS X-Ray|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Alexa for Business|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon API Gateway|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon AppFlow|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon AppStream 2.0|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Athena|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Augmented AI (A2I)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Aurora|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Braket|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Chime|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Cloud Directory|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon CloudFront|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon CloudSearch|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon CloudWatch|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon CodeGuru|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Cognito|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Comprehend|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Comprehend Medical|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Connect|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Detective|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon DevOps Guru|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon DocumentDB (with MongoDB compatibility)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon DynamoDB|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon EC2 Auto Scaling|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon ElastiCache|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Block Store (EBS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Compute Cloud (EC2)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Container Registry (ECR)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Container Service (ECS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic File System (EFS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Inference|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Kubernetes Service (EKS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic MapReduce (EMR)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Transcoder|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elasticsearch Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon EventBridge|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for Lustre|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for NetApp ONTAP|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for OpenZFS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for Windows File Server|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Forecast|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Fraud Detector|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon GameLift|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon GuardDuty|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon HealthLake|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Honeycode|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon IVS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Inspector|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kendra|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Keyspaces (for Apache Cassandra)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kinesis Data Analytics|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kinesis Data Firehose|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kinesis Data Streams|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kinesis Video Streams|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lex|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lightsail|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Location Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lookout for Metrics|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lookout for Vision|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lumberyard|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon MQ|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Macie|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Blockchain|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Grafana|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Service for Prometheus|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Streaming for Apache Kafka|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Workflows for Apache Airflow|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Neptune|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Nimble Studio|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Personalize|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Pinpoint|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Polly|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Quantum Ledger Database (QLDB)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon QuickSight|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon RDS on VMware|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Redshift|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Rekognition|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Relational Database Service (RDS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Route 53|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon SageMaker|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Email Service (SES)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Notification Service (SNS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Queue Service (SQS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Storage Service (S3)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Workflow Service (SWF)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Sumerian|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Textract|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Timestream|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Transcribe|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Transcribe Medical|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Translate|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Virtual Private Cloud (VPC)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon WorkDocs|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon WorkMail|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon WorkSpaces|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon WorkSpaces Application Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
CloudEndure Disaster Recovery|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
CloudEndure Migration|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Elastic Load Balancing|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
FreeRTOS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Red Hat OpenShift Service on AWS (ROSA)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
VMware Cloud on AWS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
### 207 Services

###  26 Regions 
### Region Summary # 
| Region Code | Region Name | no. of Supported Services | 
| ------ | -------- | -------- | 
us-east-1 | US East (N. Virginia) | 205
us-west-2 | US West (Oregon) | 199
eu-west-1 | Europe (Ireland) | 193
ap-southeast-2 | Asia Pacific (Sydney) | 187
ap-northeast-1 | Asia Pacific (Tokyo) | 187
eu-central-1 | Europe (Frankfurt) | 183
ap-southeast-1 | Asia Pacific (Singapore) | 178
us-east-2 | US East (Ohio) | 178
eu-west-2 | Europe (London) | 167
ap-northeast-2 | Asia Pacific (Seoul) | 164
ca-central-1 | Canada (Central) | 157
ap-south-1 | Asia Pacific (Mumbai) | 157
us-west-1 | US West (N. California) | 141
eu-north-1 | Europe (Stockholm) | 140
eu-west-3 | Europe (Paris) | 139
sa-east-1 | South America (Sao Paulo) | 139
ap-east-1 | Asia Pacific (Hong Kong) | 121
me-south-1 | Middle East (Bahrain) | 119
us-gov-west-1 | AWS GovCloud (US) | 119
eu-south-1 | Europe (Milan) | 110
af-south-1 | Africa (Cape Town) | 110
cn-north-1 | China (Beijing) | 99
cn-northwest-1 | China (Ningxia) | 98
us-gov-east-1 | AWS GovCloud (US-East) | 98
ap-northeast-3 | Asia Pacific (Osaka-Local) | 97
ap-southeast-3 |  Asia Pacific (Jakarta) | 67


### Number of Supported Services Per Region

<img src='https://quickchart.io/chart/render/sf-00d08126-a31d-4da9-b681-187c4bee7bb0'>

# Region and Service Table # 
| | ap-east-1 | ap-northeast-2 | ap-southeast-1 | ap-southeast-2 | ca-central-1 | eu-central-1 | eu-south-1 | me-south-1 | us-east-2 | us-west-2 | ap-northeast-1 | ap-south-1 | eu-north-1 | eu-west-1 | eu-west-2 | eu-west-3 | sa-east-1 | us-east-1 | us-west-1 | cn-northwest-1 | cn-north-1 | af-south-1 | ap-northeast-3 | ap-southeast-3 | us-gov-east-1 | us-gov-west-1 |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | -------------|
AWS Amplify|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS App Mesh|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS AppSync|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Application Discovery Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Application Migration Service (MGN)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Artifact|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Audit Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Auto Scaling|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Backup|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Batch|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Budgets|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Certificate Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Chatbot|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Cloud Map|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Cloud9|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CloudFormation|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CloudHSM|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CloudShell|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CloudTrail|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeArtifact|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeBuild|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeCommit|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeDeploy|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodePipeline|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeStar|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Compute Optimizer|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Config|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Control Tower|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Cost Explorer|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Cost and Usage Report|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Data Exchange|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Data Pipeline|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS DataSync|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Database Migration Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS DeepComposer|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS DeepLens|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS DeepRacer|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Device Farm|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Direct Connect|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Directory Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elastic Beanstalk|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elastic Disaster Recovery (DRS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaConnect|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaConvert|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaLive|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaPackage|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaStore|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaTailor|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Fargate|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Fault Injection Simulator|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Firewall Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Global Accelerator|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Glue|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Ground Station|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IQ|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Identity and Access Management (IAM)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT 1-Click|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Analytics|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Core|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Device Defender|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Device Management|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Events|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Greengrass|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT SiteWise|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Things Graph|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT TwinMaker|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Key Management Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Lake Formation|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Lambda|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS License Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Managed Services|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Marketplace|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Migration Hub|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Network Firewall|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS OpsWorks Stacks|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS OpsWorks for Chef Automate|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS OpsWorks for Puppet Enterprise|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Organizations|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Outposts|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Personal Health Dashboard|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS PrivateLink|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Proton|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Resilience Hub|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Resource Access Manager (RAM)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS RoboMaker|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Secrets Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Security Hub|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Server Migration Service (SMS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Serverless Application Repository|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Service Catalog|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Shield|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Single Sign-On|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Snowball|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Snowcone|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Snowmobile|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Step Functions|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Storage Gateway|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Support|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Systems Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Transfer Family|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Transit Gateway|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Trusted Advisor|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS VPN|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS WAF|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Well-Architected Tool|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS X-Ray|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Alexa for Business|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon API Gateway|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon AppFlow|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon AppStream 2.0|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Athena|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Augmented AI (A2I)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Aurora|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Braket|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Chime|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Cloud Directory|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon CloudFront|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon CloudSearch|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon CloudWatch|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon CodeGuru|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Cognito|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Comprehend|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Comprehend Medical|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Connect|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Detective|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon DevOps Guru|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon DocumentDB (with MongoDB compatibility)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon DynamoDB|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon EC2 Auto Scaling|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon ElastiCache|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Block Store (EBS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Compute Cloud (EC2)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Container Registry (ECR)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Container Service (ECS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic File System (EFS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Inference|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Kubernetes Service (EKS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic MapReduce (EMR)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Transcoder|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elasticsearch Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon EventBridge|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for Lustre|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for NetApp ONTAP|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for OpenZFS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for Windows File Server|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Forecast|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Fraud Detector|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon GameLift|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon GuardDuty|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon HealthLake|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Honeycode|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon IVS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Inspector|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kendra|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Keyspaces (for Apache Cassandra)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kinesis Data Analytics|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kinesis Data Firehose|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kinesis Data Streams|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kinesis Video Streams|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lex|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lightsail|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Location Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lookout for Metrics|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lookout for Vision|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lumberyard|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon MQ|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Macie|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Blockchain|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Grafana|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Service for Prometheus|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Streaming for Apache Kafka|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Workflows for Apache Airflow|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Neptune|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Nimble Studio|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Personalize|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Pinpoint|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Polly|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Quantum Ledger Database (QLDB)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon QuickSight|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon RDS on VMware|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Redshift|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Rekognition|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Relational Database Service (RDS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Route 53|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon SageMaker|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Email Service (SES)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Notification Service (SNS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Queue Service (SQS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Storage Service (S3)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Workflow Service (SWF)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Sumerian|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Textract|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Timestream|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Transcribe|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Transcribe Medical|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Translate|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Virtual Private Cloud (VPC)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon WorkDocs|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon WorkMail|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon WorkSpaces|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon WorkSpaces Application Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
CloudEndure Disaster Recovery|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
CloudEndure Migration|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Elastic Load Balancing|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
FreeRTOS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Red Hat OpenShift Service on AWS (ROSA)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
VMware Cloud on AWS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
### 207 Services

###  26 Regions 
### Region Summary # 
| Region Code | Region Name | no. of Supported Services | 
| ------ | -------- | -------- | 
us-east-1 | US East (N. Virginia) | 205
us-west-2 | US West (Oregon) | 199
eu-west-1 | Europe (Ireland) | 193
ap-southeast-2 | Asia Pacific (Sydney) | 187
ap-northeast-1 | Asia Pacific (Tokyo) | 186
eu-central-1 | Europe (Frankfurt) | 183
ap-southeast-1 | Asia Pacific (Singapore) | 178
us-east-2 | US East (Ohio) | 178
eu-west-2 | Europe (London) | 167
ap-northeast-2 | Asia Pacific (Seoul) | 164
ca-central-1 | Canada (Central) | 157
ap-south-1 | Asia Pacific (Mumbai) | 157
us-west-1 | US West (N. California) | 141
eu-north-1 | Europe (Stockholm) | 140
eu-west-3 | Europe (Paris) | 139
sa-east-1 | South America (Sao Paulo) | 139
ap-east-1 | Asia Pacific (Hong Kong) | 121
me-south-1 | Middle East (Bahrain) | 119
us-gov-west-1 | AWS GovCloud (US) | 119
eu-south-1 | Europe (Milan) | 110
af-south-1 | Africa (Cape Town) | 110
cn-north-1 | China (Beijing) | 99
cn-northwest-1 | China (Ningxia) | 98
us-gov-east-1 | AWS GovCloud (US-East) | 98
ap-northeast-3 | Asia Pacific (Osaka-Local) | 97
ap-southeast-3 |  Asia Pacific (Jakarta) | 67


### Number of Supported Services Per Region

<img src='https://quickchart.io/chart/render/sf-21a3ec44-6727-42a2-9c8c-24d541751fbf'>

# Region and Service Table # 
| | ap-east-1 | ap-northeast-2 | ap-southeast-1 | ap-southeast-2 | ca-central-1 | eu-central-1 | eu-south-1 | me-south-1 | us-east-2 | us-west-2 | ap-northeast-1 | ap-south-1 | eu-north-1 | eu-west-1 | eu-west-2 | eu-west-3 | sa-east-1 | us-east-1 | us-west-1 | cn-northwest-1 | cn-north-1 | af-south-1 | ap-northeast-3 | ap-southeast-3 | us-gov-east-1 | us-gov-west-1 |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | -------------|
AWS Amplify|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS App Mesh|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS AppSync|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Application Discovery Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Application Migration Service (MGN)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Artifact|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Audit Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Auto Scaling|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Backup|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Batch|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Budgets|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Certificate Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Chatbot|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Cloud Map|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Cloud9|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CloudFormation|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CloudHSM|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CloudShell|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CloudTrail|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeArtifact|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeBuild|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeCommit|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeDeploy|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodePipeline|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeStar|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Compute Optimizer|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Config|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Control Tower|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Cost Explorer|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Cost and Usage Report|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Data Exchange|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Data Pipeline|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS DataSync|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Database Migration Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS DeepComposer|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS DeepLens|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS DeepRacer|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Device Farm|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Direct Connect|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Directory Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elastic Beanstalk|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elastic Disaster Recovery (DRS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaConnect|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaConvert|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaLive|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaPackage|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaStore|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaTailor|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Fargate|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Fault Injection Simulator|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Firewall Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Global Accelerator|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Glue|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Ground Station|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IAM Identity Center|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IQ|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Identity and Access Management (IAM)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT 1-Click|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Analytics|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Core|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Device Defender|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Device Management|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Events|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Greengrass|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT SiteWise|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Things Graph|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT TwinMaker|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Key Management Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Lake Formation|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Lambda|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS License Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Managed Services|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Marketplace|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Migration Hub|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Network Firewall|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS OpsWorks Stacks|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS OpsWorks for Chef Automate|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS OpsWorks for Puppet Enterprise|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Organizations|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Outposts|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Personal Health Dashboard|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS PrivateLink|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Proton|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Resilience Hub|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Resource Access Manager (RAM)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS RoboMaker|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Secrets Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Security Hub|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Server Migration Service (SMS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Serverless Application Repository|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Service Catalog|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Shield|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Snowball|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Snowcone|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Snowmobile|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Step Functions|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Storage Gateway|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Support|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Systems Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Transfer Family|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Transit Gateway|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Trusted Advisor|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS VPN|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS WAF|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Well-Architected Tool|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS X-Ray|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Alexa for Business|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon API Gateway|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon AppFlow|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon AppStream 2.0|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Athena|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Augmented AI (A2I)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Aurora|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Braket|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Chime|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Cloud Directory|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon CloudFront|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon CloudSearch|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon CloudWatch|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon CodeGuru|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Cognito|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Comprehend|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Comprehend Medical|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Connect|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Detective|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon DevOps Guru|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon DocumentDB (with MongoDB compatibility)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon DynamoDB|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon EC2 Auto Scaling|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon ElastiCache|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Block Store (EBS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Compute Cloud (EC2)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Container Registry (ECR)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Container Service (ECS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic File System (EFS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Inference|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Kubernetes Service (EKS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic MapReduce (EMR)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Transcoder|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elasticsearch Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon EventBridge|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for Lustre|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for NetApp ONTAP|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for OpenZFS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for Windows File Server|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Forecast|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Fraud Detector|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon GameLift|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon GuardDuty|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon HealthLake|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Honeycode|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon IVS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Inspector|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kendra|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Keyspaces (for Apache Cassandra)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kinesis Data Analytics|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kinesis Data Firehose|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kinesis Data Streams|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kinesis Video Streams|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lex|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lightsail|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Location Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lookout for Metrics|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lookout for Vision|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lumberyard|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon MQ|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Macie|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Blockchain|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Grafana|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Service for Prometheus|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Streaming for Apache Kafka|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Workflows for Apache Airflow|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Neptune|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Nimble Studio|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Personalize|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Pinpoint|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Polly|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Quantum Ledger Database (QLDB)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon QuickSight|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon RDS on VMware|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Redshift|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Rekognition|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Relational Database Service (RDS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Route 53|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon SageMaker|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Email Service (SES)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Notification Service (SNS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Queue Service (SQS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Storage Service (S3)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Workflow Service (SWF)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Sumerian|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Textract|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Timestream|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Transcribe|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Transcribe Medical|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Translate|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Virtual Private Cloud (VPC)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon WorkDocs|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon WorkMail|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon WorkSpaces|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon WorkSpaces Application Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
CloudEndure Disaster Recovery|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
CloudEndure Migration|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Elastic Load Balancing|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
FreeRTOS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Red Hat OpenShift Service on AWS (ROSA)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
VMware Cloud on AWS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
### 207 Services

###  26 Regions 
### Region Summary # 
| Region Code | Region Name | no. of Supported Services | 
| ------ | -------- | -------- | 
us-east-1 | US East (N. Virginia) | 205
us-west-2 | US West (Oregon) | 199
eu-west-1 | Europe (Ireland) | 193
ap-southeast-2 | Asia Pacific (Sydney) | 187
ap-northeast-1 | Asia Pacific (Tokyo) | 186
eu-central-1 | Europe (Frankfurt) | 183
ap-southeast-1 | Asia Pacific (Singapore) | 178
us-east-2 | US East (Ohio) | 178
eu-west-2 | Europe (London) | 167
ap-northeast-2 | Asia Pacific (Seoul) | 164
ca-central-1 | Canada (Central) | 157
ap-south-1 | Asia Pacific (Mumbai) | 157
us-west-1 | US West (N. California) | 141
eu-north-1 | Europe (Stockholm) | 140
eu-west-3 | Europe (Paris) | 139
sa-east-1 | South America (Sao Paulo) | 139
ap-east-1 | Asia Pacific (Hong Kong) | 121
me-south-1 | Middle East (Bahrain) | 119
us-gov-west-1 | AWS GovCloud (US) | 119
eu-south-1 | Europe (Milan) | 110
af-south-1 | Africa (Cape Town) | 110
cn-north-1 | China (Beijing) | 99
cn-northwest-1 | China (Ningxia) | 98
us-gov-east-1 | AWS GovCloud (US-East) | 98
ap-northeast-3 | Asia Pacific (Osaka-Local) | 97
ap-southeast-3 |  Asia Pacific (Jakarta) | 67


### Number of Supported Services Per Region

<img src='https://quickchart.io/chart/render/sf-cc9b8cec-2769-4e74-9e4b-b600d8285308'>

# Region and Service Table # 
| | ap-east-1 | ap-northeast-2 | ap-southeast-1 | ap-southeast-2 | ca-central-1 | eu-central-1 | eu-south-1 | me-south-1 | us-east-2 | us-west-2 | ap-northeast-1 | ap-south-1 | eu-north-1 | eu-west-1 | eu-west-2 | eu-west-3 | sa-east-1 | us-east-1 | us-west-1 | cn-northwest-1 | cn-north-1 | af-south-1 | ap-northeast-3 | ap-southeast-3 | us-gov-east-1 | us-gov-west-1 |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | -------------|
AWS Amplify|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS App Mesh|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS AppSync|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Application Discovery Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Application Migration Service (MGN)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Artifact|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Audit Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Auto Scaling|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Backup|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Batch|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Budgets|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Certificate Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Chatbot|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Cloud Map|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Cloud9|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CloudFormation|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CloudHSM|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CloudShell|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CloudTrail|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeArtifact|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeBuild|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeCommit|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeDeploy|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodePipeline|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeStar|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Compute Optimizer|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Config|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Control Tower|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Cost Explorer|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Cost and Usage Report|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Data Exchange|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Data Pipeline|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS DataSync|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Database Migration Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS DeepComposer|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS DeepLens|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS DeepRacer|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Device Farm|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Direct Connect|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Directory Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elastic Beanstalk|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elastic Disaster Recovery (DRS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaConnect|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaConvert|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaLive|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaPackage|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaStore|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaTailor|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Fargate|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Fault Injection Simulator|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Firewall Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Global Accelerator|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Glue|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Ground Station|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IQ|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Identity and Access Management (IAM)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT 1-Click|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Analytics|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Core|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Device Defender|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Device Management|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Events|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Greengrass|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT SiteWise|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Things Graph|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT TwinMaker|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Key Management Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Lake Formation|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Lambda|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS License Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Managed Services|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Marketplace|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Migration Hub|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Network Firewall|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS OpsWorks Stacks|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS OpsWorks for Chef Automate|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS OpsWorks for Puppet Enterprise|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Organizations|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Outposts|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Personal Health Dashboard|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS PrivateLink|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Proton|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Resilience Hub|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Resource Access Manager (RAM)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS RoboMaker|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Secrets Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Security Hub|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Server Migration Service (SMS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Serverless Application Repository|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Service Catalog|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Shield|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Single Sign-On|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Snowball|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Snowcone|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Snowmobile|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Step Functions|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Storage Gateway|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Support|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Systems Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Transfer Family|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Transit Gateway|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Trusted Advisor|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS VPN|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS WAF|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Well-Architected Tool|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS X-Ray|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Alexa for Business|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon API Gateway|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon AppFlow|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon AppStream 2.0|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Athena|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Augmented AI (A2I)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Aurora|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Braket|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Chime|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Cloud Directory|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon CloudFront|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon CloudSearch|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon CloudWatch|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon CodeGuru|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Cognito|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Comprehend|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Comprehend Medical|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Connect|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Detective|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon DevOps Guru|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon DocumentDB (with MongoDB compatibility)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon DynamoDB|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon EC2 Auto Scaling|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon ElastiCache|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Block Store (EBS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Compute Cloud (EC2)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Container Registry (ECR)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Container Service (ECS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic File System (EFS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Inference|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Kubernetes Service (EKS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic MapReduce (EMR)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Transcoder|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elasticsearch Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon EventBridge|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for Lustre|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for NetApp ONTAP|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for OpenZFS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for Windows File Server|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Forecast|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Fraud Detector|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon GameLift|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon GuardDuty|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon HealthLake|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Honeycode|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon IVS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Inspector|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kendra|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Keyspaces (for Apache Cassandra)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kinesis Data Analytics|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kinesis Data Firehose|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kinesis Data Streams|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kinesis Video Streams|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lex|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lightsail|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Location Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lookout for Metrics|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lookout for Vision|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lumberyard|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon MQ|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Macie|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Blockchain|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Grafana|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Service for Prometheus|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Streaming for Apache Kafka|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Workflows for Apache Airflow|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Neptune|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Nimble Studio|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Personalize|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Pinpoint|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Polly|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Quantum Ledger Database (QLDB)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon QuickSight|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon RDS on VMware|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Redshift|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Rekognition|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Relational Database Service (RDS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Route 53|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon SageMaker|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Email Service (SES)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Notification Service (SNS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Queue Service (SQS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Storage Service (S3)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Workflow Service (SWF)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Sumerian|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Textract|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Timestream|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Transcribe|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Transcribe Medical|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Translate|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Virtual Private Cloud (VPC)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon WorkDocs|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon WorkMail|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon WorkSpaces|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon WorkSpaces Application Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
CloudEndure Disaster Recovery|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
CloudEndure Migration|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Elastic Load Balancing|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
FreeRTOS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Red Hat OpenShift Service on AWS (ROSA)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
VMware Cloud on AWS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
### 207 Services

###  26 Regions 
### Region Summary # 
| Region Code | Region Name | no. of Supported Services | 
| ------ | -------- | -------- | 
us-east-1 | US East (N. Virginia) | 205
us-west-2 | US West (Oregon) | 199
eu-west-1 | Europe (Ireland) | 193
ap-southeast-2 | Asia Pacific (Sydney) | 187
ap-northeast-1 | Asia Pacific (Tokyo) | 186
eu-central-1 | Europe (Frankfurt) | 183
ap-southeast-1 | Asia Pacific (Singapore) | 178
us-east-2 | US East (Ohio) | 178
eu-west-2 | Europe (London) | 167
ap-northeast-2 | Asia Pacific (Seoul) | 164
ca-central-1 | Canada (Central) | 157
ap-south-1 | Asia Pacific (Mumbai) | 157
us-west-1 | US West (N. California) | 141
eu-north-1 | Europe (Stockholm) | 140
eu-west-3 | Europe (Paris) | 139
sa-east-1 | South America (Sao Paulo) | 139
ap-east-1 | Asia Pacific (Hong Kong) | 121
me-south-1 | Middle East (Bahrain) | 119
us-gov-west-1 | AWS GovCloud (US) | 118
eu-south-1 | Europe (Milan) | 110
af-south-1 | Africa (Cape Town) | 110
cn-north-1 | China (Beijing) | 99
cn-northwest-1 | China (Ningxia) | 98
ap-northeast-3 | Asia Pacific (Osaka-Local) | 97
us-gov-east-1 | AWS GovCloud (US-East) | 97
ap-southeast-3 |  Asia Pacific (Jakarta) | 67


### Number of Supported Services Per Region

<img src='https://quickchart.io/chart/render/sf-a3ee7d26-0e32-46b3-8cb8-571085cf07fe'>

# Region and Service Table # 
| | ap-east-1 | ap-northeast-2 | ap-southeast-1 | ap-southeast-2 | ca-central-1 | eu-central-1 | eu-south-1 | me-south-1 | us-east-2 | us-west-2 | ap-northeast-1 | ap-south-1 | eu-north-1 | eu-west-1 | eu-west-2 | eu-west-3 | sa-east-1 | us-east-1 | us-west-1 | cn-northwest-1 | cn-north-1 | af-south-1 | ap-northeast-3 | ap-southeast-3 | us-gov-east-1 | us-gov-west-1 |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | -------------|
AWS Amplify|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS App Mesh|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS AppSync|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Application Discovery Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Application Migration Service (MGN)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Artifact|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Audit Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Auto Scaling|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Backup|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Batch|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Budgets|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Certificate Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Chatbot|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Cloud Map|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Cloud9|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CloudFormation|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CloudHSM|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CloudShell|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CloudTrail|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeArtifact|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeBuild|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeCommit|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeDeploy|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodePipeline|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeStar|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Compute Optimizer|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Config|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Control Tower|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Cost Explorer|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Cost and Usage Report|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Data Exchange|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Data Pipeline|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS DataSync|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Database Migration Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS DeepComposer|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS DeepLens|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS DeepRacer|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Device Farm|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Direct Connect|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Directory Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elastic Beanstalk|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elastic Disaster Recovery (DRS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaConnect|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaConvert|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaLive|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaPackage|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaStore|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaTailor|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Fargate|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Fault Injection Simulator|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Firewall Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Global Accelerator|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Glue|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Ground Station|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IQ|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Identity and Access Management (IAM)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT 1-Click|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Analytics|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Core|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Device Defender|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Device Management|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Events|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Greengrass|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT SiteWise|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Things Graph|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT TwinMaker|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Key Management Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Lake Formation|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Lambda|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS License Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Managed Services|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Marketplace|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Migration Hub|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Network Firewall|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS OpsWorks Stacks|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS OpsWorks for Chef Automate|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS OpsWorks for Puppet Enterprise|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Organizations|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Outposts|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Personal Health Dashboard|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS PrivateLink|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Proton|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Resilience Hub|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Resource Access Manager (RAM)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS RoboMaker|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Secrets Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Security Hub|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Server Migration Service (SMS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Serverless Application Repository|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Service Catalog|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Shield|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Single Sign-On|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Snowball|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Snowcone|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Snowmobile|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Step Functions|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Storage Gateway|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Support|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Systems Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Transfer Family|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Transit Gateway|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Trusted Advisor|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS VPN|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS WAF|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Well-Architected Tool|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS X-Ray|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Alexa for Business|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon API Gateway|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon AppFlow|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon AppStream 2.0|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Athena|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Augmented AI (A2I)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Aurora|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Braket|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Chime|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Cloud Directory|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon CloudFront|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon CloudSearch|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon CloudWatch|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon CodeGuru|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Cognito|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Comprehend|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Comprehend Medical|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Connect|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Detective|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon DevOps Guru|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon DocumentDB (with MongoDB compatibility)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon DynamoDB|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon EC2 Auto Scaling|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon ElastiCache|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Block Store (EBS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Compute Cloud (EC2)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Container Registry (ECR)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Container Service (ECS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic File System (EFS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Inference|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Kubernetes Service (EKS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic MapReduce (EMR)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Transcoder|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elasticsearch Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon EventBridge|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for Lustre|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for NetApp ONTAP|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for OpenZFS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for Windows File Server|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Forecast|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Fraud Detector|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon GameLift|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon GuardDuty|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon HealthLake|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Honeycode|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon IVS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Inspector|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kendra|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Keyspaces (for Apache Cassandra)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kinesis Data Analytics|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kinesis Data Firehose|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kinesis Data Streams|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kinesis Video Streams|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lex|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lightsail|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Location Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lookout for Metrics|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lookout for Vision|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lumberyard|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon MQ|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Macie|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Blockchain|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Grafana|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Service for Prometheus|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Streaming for Apache Kafka|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Workflows for Apache Airflow|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Neptune|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Nimble Studio|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Personalize|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Pinpoint|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Polly|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Quantum Ledger Database (QLDB)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon QuickSight|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon RDS on VMware|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Redshift|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Rekognition|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Relational Database Service (RDS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Route 53|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon SageMaker|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Email Service (SES)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Notification Service (SNS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Queue Service (SQS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Storage Service (S3)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Workflow Service (SWF)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Sumerian|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Textract|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Timestream|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Transcribe|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Transcribe Medical|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Translate|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Virtual Private Cloud (VPC)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon WorkDocs|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon WorkMail|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon WorkSpaces|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon WorkSpaces Application Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
CloudEndure Disaster Recovery|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
CloudEndure Migration|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Elastic Load Balancing|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
FreeRTOS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Red Hat OpenShift Service on AWS (ROSA)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
VMware Cloud on AWS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
### 207 Services

###  26 Regions 
### Region Summary # 
| Region Code | Region Name | no. of Supported Services | 
| ------ | -------- | -------- | 
us-east-1 | US East (N. Virginia) | 205
us-west-2 | US West (Oregon) | 199
eu-west-1 | Europe (Ireland) | 193
ap-southeast-2 | Asia Pacific (Sydney) | 187
ap-northeast-1 | Asia Pacific (Tokyo) | 186
eu-central-1 | Europe (Frankfurt) | 183
ap-southeast-1 | Asia Pacific (Singapore) | 178
us-east-2 | US East (Ohio) | 178
eu-west-2 | Europe (London) | 167
ap-northeast-2 | Asia Pacific (Seoul) | 164
ca-central-1 | Canada (Central) | 157
ap-south-1 | Asia Pacific (Mumbai) | 157
us-west-1 | US West (N. California) | 141
eu-north-1 | Europe (Stockholm) | 140
eu-west-3 | Europe (Paris) | 139
sa-east-1 | South America (Sao Paulo) | 139
ap-east-1 | Asia Pacific (Hong Kong) | 120
me-south-1 | Middle East (Bahrain) | 118
us-gov-west-1 | AWS GovCloud (US) | 118
eu-south-1 | Europe (Milan) | 110
af-south-1 | Africa (Cape Town) | 109
cn-north-1 | China (Beijing) | 99
cn-northwest-1 | China (Ningxia) | 98
ap-northeast-3 | Asia Pacific (Osaka-Local) | 97
us-gov-east-1 | AWS GovCloud (US-East) | 97
ap-southeast-3 |  Asia Pacific (Jakarta) | 67


### Number of Supported Services Per Region

<img src='https://quickchart.io/chart/render/sf-d2e2e540-8ddf-41dc-9648-b8494426fcfb'>

# Region and Service Table # 
| | ap-east-1 | ap-northeast-2 | ap-southeast-1 | ap-southeast-2 | ca-central-1 | eu-central-1 | eu-south-1 | me-south-1 | us-east-2 | us-west-2 | ap-northeast-1 | ap-south-1 | eu-north-1 | eu-west-1 | eu-west-2 | eu-west-3 | sa-east-1 | us-east-1 | us-west-1 | cn-northwest-1 | cn-north-1 | af-south-1 | ap-northeast-3 | ap-southeast-3 | us-gov-east-1 | us-gov-west-1 |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | -------------|
AWS Amplify|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS App Mesh|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS AppSync|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Application Discovery Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Application Migration Service (MGN)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Artifact|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Audit Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Auto Scaling|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Backup|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Batch|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Budgets|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Certificate Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Chatbot|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Cloud Map|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Cloud9|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CloudFormation|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CloudHSM|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CloudShell|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CloudTrail|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeArtifact|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeBuild|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeCommit|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeDeploy|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodePipeline|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeStar|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Compute Optimizer|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Config|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Control Tower|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Cost Explorer|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Cost and Usage Report|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Data Exchange|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Data Pipeline|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS DataSync|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Database Migration Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS DeepComposer|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS DeepLens|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS DeepRacer|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Device Farm|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Direct Connect|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Directory Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elastic Beanstalk|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elastic Disaster Recovery (DRS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaConnect|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaConvert|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaLive|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaPackage|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaStore|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaTailor|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Fargate|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Fault Injection Simulator|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Firewall Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Global Accelerator|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Glue|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Ground Station|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IQ|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Identity and Access Management (IAM)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT 1-Click|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Analytics|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Core|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Device Defender|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Device Management|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Events|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Greengrass|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT SiteWise|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Things Graph|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT TwinMaker|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Key Management Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Lake Formation|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Lambda|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS License Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Managed Services|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Marketplace|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Migration Hub|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Network Firewall|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS OpsWorks Stacks|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS OpsWorks for Chef Automate|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS OpsWorks for Puppet Enterprise|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Organizations|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Outposts|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Personal Health Dashboard|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS PrivateLink|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Proton|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Resilience Hub|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Resource Access Manager (RAM)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS RoboMaker|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Secrets Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Security Hub|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Server Migration Service (SMS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Serverless Application Repository|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Service Catalog|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Shield|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Single Sign-On|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Snowball|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Snowcone|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Snowmobile|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Step Functions|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Storage Gateway|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Support|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Systems Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Transfer Family|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Transit Gateway|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Trusted Advisor|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS VPN|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS WAF|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Well-Architected Tool|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS X-Ray|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Alexa for Business|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon API Gateway|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon AppFlow|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon AppStream 2.0|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Athena|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Augmented AI (A2I)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Aurora|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Braket|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Chime|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Cloud Directory|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon CloudFront|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon CloudSearch|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon CloudWatch|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon CodeGuru|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Cognito|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Comprehend|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Comprehend Medical|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Connect|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Detective|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon DevOps Guru|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon DocumentDB (with MongoDB compatibility)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon DynamoDB|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon EC2 Auto Scaling|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon ElastiCache|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Block Store (EBS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Compute Cloud (EC2)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Container Registry (ECR)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Container Service (ECS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic File System (EFS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Inference|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Kubernetes Service (EKS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic MapReduce (EMR)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Transcoder|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elasticsearch Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon EventBridge|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for Lustre|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for NetApp ONTAP|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for OpenZFS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for Windows File Server|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Forecast|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Fraud Detector|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon GameLift|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon GuardDuty|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon HealthLake|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Honeycode|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon IVS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Inspector|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kendra|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Keyspaces (for Apache Cassandra)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kinesis Data Analytics|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kinesis Data Firehose|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kinesis Data Streams|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kinesis Video Streams|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lex|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lightsail|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Location Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lookout for Metrics|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lookout for Vision|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lumberyard|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon MQ|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Macie|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Blockchain|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Grafana|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Service for Prometheus|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Streaming for Apache Kafka|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Workflows for Apache Airflow|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Neptune|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Nimble Studio|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Personalize|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Pinpoint|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Polly|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Quantum Ledger Database (QLDB)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon QuickSight|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon RDS on VMware|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Redshift|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Rekognition|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Relational Database Service (RDS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Route 53|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon SageMaker|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Email Service (SES)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Notification Service (SNS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Queue Service (SQS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Storage Service (S3)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Workflow Service (SWF)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Sumerian|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Textract|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Timestream|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Transcribe|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Transcribe Medical|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Translate|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Virtual Private Cloud (VPC)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon WorkDocs|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon WorkMail|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon WorkSpaces|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon WorkSpaces Application Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
CloudEndure Disaster Recovery|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
CloudEndure Migration|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Elastic Load Balancing|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
FreeRTOS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Red Hat OpenShift Service on AWS (ROSA)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
VMware Cloud on AWS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
### 207 Services

###  26 Regions 
### Region Summary # 
| Region Code | Region Name | no. of Supported Services | 
| ------ | -------- | -------- | 
us-east-1 | US East (N. Virginia) | 205
us-west-2 | US West (Oregon) | 199
eu-west-1 | Europe (Ireland) | 193
ap-southeast-2 | Asia Pacific (Sydney) | 186
ap-northeast-1 | Asia Pacific (Tokyo) | 186
eu-central-1 | Europe (Frankfurt) | 183
ap-southeast-1 | Asia Pacific (Singapore) | 178
us-east-2 | US East (Ohio) | 178
eu-west-2 | Europe (London) | 167
ap-northeast-2 | Asia Pacific (Seoul) | 164
ca-central-1 | Canada (Central) | 157
ap-south-1 | Asia Pacific (Mumbai) | 157
us-west-1 | US West (N. California) | 141
eu-north-1 | Europe (Stockholm) | 140
eu-west-3 | Europe (Paris) | 139
sa-east-1 | South America (Sao Paulo) | 139
ap-east-1 | Asia Pacific (Hong Kong) | 120
me-south-1 | Middle East (Bahrain) | 118
us-gov-west-1 | AWS GovCloud (US) | 118
eu-south-1 | Europe (Milan) | 110
af-south-1 | Africa (Cape Town) | 109
cn-north-1 | China (Beijing) | 99
cn-northwest-1 | China (Ningxia) | 98
ap-northeast-3 | Asia Pacific (Osaka-Local) | 97
us-gov-east-1 | AWS GovCloud (US-East) | 97
ap-southeast-3 |  Asia Pacific (Jakarta) | 67


### Number of Supported Services Per Region

<img src='https://quickchart.io/chart/render/sf-3d398183-bbbd-456f-8158-c7b08215bb1b'>

# Region and Service Table # 
| | ap-east-1 | ap-northeast-2 | ap-southeast-1 | ap-southeast-2 | ca-central-1 | eu-central-1 | eu-south-1 | me-south-1 | us-east-2 | us-west-2 | ap-northeast-1 | ap-south-1 | eu-north-1 | eu-west-1 | eu-west-2 | eu-west-3 | sa-east-1 | us-east-1 | us-west-1 | cn-northwest-1 | cn-north-1 | af-south-1 | ap-northeast-3 | ap-southeast-3 | us-gov-east-1 | us-gov-west-1 |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | -------------|
AWS Amplify|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS App Mesh|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS AppSync|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Application Discovery Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Application Migration Service (MGN)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Artifact|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Audit Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Auto Scaling|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Backup|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Batch|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Budgets|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Certificate Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Chatbot|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Cloud Map|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Cloud9|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CloudFormation|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CloudHSM|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CloudShell|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CloudTrail|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeArtifact|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeBuild|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeCommit|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeDeploy|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodePipeline|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeStar|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Compute Optimizer|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Config|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Control Tower|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Cost Explorer|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Cost and Usage Report|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Data Exchange|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Data Pipeline|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS DataSync|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Database Migration Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS DeepComposer|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS DeepLens|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS DeepRacer|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Device Farm|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Direct Connect|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Directory Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elastic Beanstalk|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elastic Disaster Recovery (DRS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaConnect|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaConvert|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaLive|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaPackage|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaStore|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaTailor|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Fargate|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Fault Injection Simulator|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Firewall Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Global Accelerator|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Glue|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Ground Station|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IQ|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Identity and Access Management (IAM)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT 1-Click|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Analytics|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Core|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Device Defender|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Device Management|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Events|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Greengrass|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT SiteWise|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Things Graph|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT TwinMaker|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Key Management Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Lake Formation|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Lambda|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS License Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Managed Services|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Marketplace|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Migration Hub|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Network Firewall|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS OpsWorks Stacks|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS OpsWorks for Chef Automate|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS OpsWorks for Puppet Enterprise|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Organizations|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Outposts|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Personal Health Dashboard|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS PrivateLink|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Proton|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Resilience Hub|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Resource Access Manager (RAM)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS RoboMaker|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Secrets Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Security Hub|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Server Migration Service (SMS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Serverless Application Repository|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Service Catalog|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Shield|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Single Sign-On|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Snowball|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Snowcone|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Snowmobile|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Step Functions|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Storage Gateway|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Support|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Systems Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Transfer Family|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Transit Gateway|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Trusted Advisor|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS VPN|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS WAF|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Well-Architected Tool|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS X-Ray|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Alexa for Business|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon API Gateway|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon AppFlow|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon AppStream 2.0|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Athena|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Augmented AI (A2I)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Aurora|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Braket|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Chime|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Cloud Directory|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon CloudFront|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon CloudSearch|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon CloudWatch|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon CodeGuru|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Cognito|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Comprehend|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Comprehend Medical|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Connect|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Detective|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon DevOps Guru|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon DocumentDB (with MongoDB compatibility)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon DynamoDB|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon EC2 Auto Scaling|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon ElastiCache|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Block Store (EBS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Compute Cloud (EC2)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Container Registry (ECR)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Container Service (ECS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic File System (EFS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Inference|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Kubernetes Service (EKS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic MapReduce (EMR)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Transcoder|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elasticsearch Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon EventBridge|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for Lustre|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for NetApp ONTAP|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for OpenZFS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for Windows File Server|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Forecast|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Fraud Detector|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon GameLift|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon GuardDuty|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon HealthLake|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Honeycode|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon IVS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Inspector|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kendra|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Keyspaces (for Apache Cassandra)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kinesis Data Analytics|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kinesis Data Firehose|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kinesis Data Streams|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kinesis Video Streams|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lex|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lightsail|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Location Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lookout for Metrics|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lookout for Vision|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lumberyard|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon MQ|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Macie|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Blockchain|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Grafana|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Service for Prometheus|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Streaming for Apache Kafka|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Workflows for Apache Airflow|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Neptune|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Nimble Studio|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Personalize|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Pinpoint|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Polly|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Quantum Ledger Database (QLDB)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon QuickSight|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon RDS on VMware|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Redshift|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Rekognition|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Relational Database Service (RDS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Route 53|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon SageMaker|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Email Service (SES)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Notification Service (SNS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Queue Service (SQS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Storage Service (S3)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Workflow Service (SWF)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Sumerian|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Textract|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Timestream|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Transcribe|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Transcribe Medical|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Translate|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Virtual Private Cloud (VPC)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon WorkDocs|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon WorkMail|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon WorkSpaces|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon WorkSpaces Application Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
CloudEndure Disaster Recovery|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
CloudEndure Migration|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Elastic Load Balancing|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
FreeRTOS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Red Hat OpenShift Service on AWS (ROSA)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
VMware Cloud on AWS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
### 207 Services

###  26 Regions 
### Region Summary # 
| Region Code | Region Name | no. of Supported Services | 
| ------ | -------- | -------- | 
us-east-1 | US East (N. Virginia) | 205
us-west-2 | US West (Oregon) | 199
eu-west-1 | Europe (Ireland) | 193
ap-southeast-2 | Asia Pacific (Sydney) | 186
ap-northeast-1 | Asia Pacific (Tokyo) | 186
eu-central-1 | Europe (Frankfurt) | 183
ap-southeast-1 | Asia Pacific (Singapore) | 178
us-east-2 | US East (Ohio) | 178
eu-west-2 | Europe (London) | 167
ap-northeast-2 | Asia Pacific (Seoul) | 164
ca-central-1 | Canada (Central) | 157
ap-south-1 | Asia Pacific (Mumbai) | 157
us-west-1 | US West (N. California) | 141
eu-north-1 | Europe (Stockholm) | 140
eu-west-3 | Europe (Paris) | 139
sa-east-1 | South America (Sao Paulo) | 139
ap-east-1 | Asia Pacific (Hong Kong) | 119
me-south-1 | Middle East (Bahrain) | 117
us-gov-west-1 | AWS GovCloud (US) | 117
eu-south-1 | Europe (Milan) | 110
af-south-1 | Africa (Cape Town) | 109
cn-north-1 | China (Beijing) | 99
cn-northwest-1 | China (Ningxia) | 98
ap-northeast-3 | Asia Pacific (Osaka-Local) | 97
us-gov-east-1 | AWS GovCloud (US-East) | 96
ap-southeast-3 |  Asia Pacific (Jakarta) | 67


### Number of Supported Services Per Region

<img src='https://quickchart.io/chart/render/sf-ed17fbfb-0deb-4e44-b16c-96dab0119858'>

# Region and Service Table # 
| | ap-east-1 | ap-northeast-2 | ap-southeast-1 | ap-southeast-2 | ca-central-1 | eu-central-1 | eu-south-1 | me-south-1 | us-east-2 | us-west-2 | ap-northeast-1 | ap-south-1 | eu-north-1 | eu-west-1 | eu-west-2 | eu-west-3 | sa-east-1 | us-east-1 | us-west-1 | cn-northwest-1 | cn-north-1 | af-south-1 | ap-northeast-3 | ap-southeast-3 | us-gov-east-1 | us-gov-west-1 |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | -------------|
AWS Amplify|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS App Mesh|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS AppSync|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Application Discovery Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Application Migration Service (MGN)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Artifact|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Audit Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Auto Scaling|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Backup|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Batch|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Budgets|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Certificate Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Chatbot|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Cloud Map|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Cloud9|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CloudFormation|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CloudHSM|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CloudShell|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CloudTrail|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeArtifact|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeBuild|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeCommit|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeDeploy|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodePipeline|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeStar|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Compute Optimizer|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Config|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Control Tower|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Cost Explorer|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Cost and Usage Report|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Data Exchange|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Data Pipeline|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS DataSync|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Database Migration Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS DeepComposer|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS DeepLens|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS DeepRacer|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Device Farm|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Direct Connect|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Directory Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elastic Beanstalk|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elastic Disaster Recovery (DRS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaConnect|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaConvert|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaLive|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaPackage|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaStore|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaTailor|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Fargate|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Fault Injection Simulator|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Firewall Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Global Accelerator|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Glue|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Ground Station|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IQ|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Identity and Access Management (IAM)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT 1-Click|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Analytics|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Core|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Device Defender|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Device Management|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Events|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Greengrass|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT SiteWise|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Things Graph|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT TwinMaker|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Key Management Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Lake Formation|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Lambda|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS License Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Managed Services|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Marketplace|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Migration Hub|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Network Firewall|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS OpsWorks Stacks|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS OpsWorks for Chef Automate|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS OpsWorks for Puppet Enterprise|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Organizations|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Outposts|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Personal Health Dashboard|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS PrivateLink|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Proton|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Resilience Hub|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Resource Access Manager (RAM)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS RoboMaker|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Secrets Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Security Hub|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Server Migration Service (SMS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Serverless Application Repository|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Service Catalog|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Shield|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Single Sign-On|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Snowball|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Snowcone|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Snowmobile|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Step Functions|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Storage Gateway|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Support|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Systems Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Transfer Family|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Transit Gateway|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Trusted Advisor|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS VPN|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS WAF|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Well-Architected Tool|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS X-Ray|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Alexa for Business|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon API Gateway|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon AppFlow|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon AppStream 2.0|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Athena|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Augmented AI (A2I)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Aurora|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Braket|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Chime|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Cloud Directory|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon CloudFront|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon CloudSearch|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon CloudWatch|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon CodeGuru|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Cognito|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Comprehend|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Comprehend Medical|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Connect|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Detective|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon DevOps Guru|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon DocumentDB (with MongoDB compatibility)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon DynamoDB|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon EC2 Auto Scaling|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon ElastiCache|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Block Store (EBS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Compute Cloud (EC2)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Container Registry (ECR)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Container Service (ECS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic File System (EFS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Inference|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Kubernetes Service (EKS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic MapReduce (EMR)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Transcoder|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elasticsearch Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon EventBridge|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for Lustre|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for NetApp ONTAP|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for OpenZFS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for Windows File Server|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Forecast|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Fraud Detector|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon GameLift|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon GuardDuty|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon HealthLake|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Honeycode|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon IVS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Inspector|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kendra|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Keyspaces (for Apache Cassandra)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kinesis Data Analytics|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kinesis Data Firehose|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kinesis Data Streams|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kinesis Video Streams|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lex|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lightsail|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Location Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lookout for Metrics|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lookout for Vision|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lumberyard|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon MQ|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Macie|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Blockchain|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Grafana|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Service for Prometheus|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Streaming for Apache Kafka|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Workflows for Apache Airflow|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Neptune|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Nimble Studio|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Personalize|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Pinpoint|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Polly|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Quantum Ledger Database (QLDB)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon QuickSight|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon RDS on VMware|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Redshift|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Rekognition|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Relational Database Service (RDS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Route 53|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon SageMaker|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Email Service (SES)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Notification Service (SNS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Queue Service (SQS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Storage Service (S3)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Workflow Service (SWF)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Sumerian|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Textract|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Timestream|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Transcribe|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Transcribe Medical|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Translate|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Virtual Private Cloud (VPC)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon WorkDocs|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon WorkMail|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon WorkSpaces|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon WorkSpaces Application Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
CloudEndure Disaster Recovery|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
CloudEndure Migration|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Elastic Load Balancing|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
FreeRTOS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Red Hat OpenShift Service on AWS (ROSA)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
VMware Cloud on AWS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
### 207 Services

###  26 Regions 
### Region Summary # 
| Region Code | Region Name | no. of Supported Services | 
| ------ | -------- | -------- | 
us-east-1 | US East (N. Virginia) | 205
us-west-2 | US West (Oregon) | 199
eu-west-1 | Europe (Ireland) | 193
ap-southeast-2 | Asia Pacific (Sydney) | 186
ap-northeast-1 | Asia Pacific (Tokyo) | 186
eu-central-1 | Europe (Frankfurt) | 183
ap-southeast-1 | Asia Pacific (Singapore) | 178
us-east-2 | US East (Ohio) | 177
eu-west-2 | Europe (London) | 167
ap-northeast-2 | Asia Pacific (Seoul) | 164
ca-central-1 | Canada (Central) | 157
ap-south-1 | Asia Pacific (Mumbai) | 157
us-west-1 | US West (N. California) | 141
eu-north-1 | Europe (Stockholm) | 140
eu-west-3 | Europe (Paris) | 139
sa-east-1 | South America (Sao Paulo) | 139
ap-east-1 | Asia Pacific (Hong Kong) | 119
me-south-1 | Middle East (Bahrain) | 117
us-gov-west-1 | AWS GovCloud (US) | 117
eu-south-1 | Europe (Milan) | 110
af-south-1 | Africa (Cape Town) | 109
cn-north-1 | China (Beijing) | 99
cn-northwest-1 | China (Ningxia) | 98
ap-northeast-3 | Asia Pacific (Osaka-Local) | 97
us-gov-east-1 | AWS GovCloud (US-East) | 96
ap-southeast-3 |  Asia Pacific (Jakarta) | 67


### Number of Supported Services Per Region

<img src='https://quickchart.io/chart/render/zf-d3a63e3b-93c5-4a17-98e0-a2a53d3b1f3b'>

# Region and Service Table # 
| | ap-east-1 | ap-northeast-2 | ap-southeast-1 | ap-southeast-2 | ca-central-1 | eu-central-1 | eu-south-1 | me-south-1 | us-east-2 | us-west-2 | ap-northeast-1 | ap-south-1 | eu-north-1 | eu-west-1 | eu-west-2 | eu-west-3 | sa-east-1 | us-east-1 | us-west-1 | cn-northwest-1 | cn-north-1 | af-south-1 | ap-northeast-3 | ap-southeast-3 | us-gov-east-1 | us-gov-west-1 |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | -------------|
AWS Amplify|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS App Mesh|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS AppSync|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Application Discovery Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Application Migration Service (MGN)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Artifact|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Audit Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Auto Scaling|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Backup|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Batch|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Budgets|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Certificate Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Chatbot|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Cloud Map|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Cloud9|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CloudFormation|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CloudHSM|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CloudShell|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CloudTrail|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeArtifact|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeBuild|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeCommit|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeDeploy|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodePipeline|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeStar|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Compute Optimizer|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Config|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Control Tower|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Cost Explorer|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Cost and Usage Report|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Data Exchange|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Data Pipeline|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS DataSync|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Database Migration Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS DeepComposer|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS DeepLens|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS DeepRacer|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Device Farm|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Direct Connect|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Directory Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elastic Beanstalk|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elastic Disaster Recovery (DRS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaConnect|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaConvert|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaLive|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaPackage|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaStore|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaTailor|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Fargate|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Fault Injection Simulator|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Firewall Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Global Accelerator|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Glue|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Ground Station|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IQ|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Identity and Access Management (IAM)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT 1-Click|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Analytics|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Core|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Device Defender|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Device Management|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Events|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Greengrass|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT SiteWise|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Things Graph|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT TwinMaker|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Key Management Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Lake Formation|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Lambda|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS License Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Managed Services|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Marketplace|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Migration Hub|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Network Firewall|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS OpsWorks Stacks|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS OpsWorks for Chef Automate|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS OpsWorks for Puppet Enterprise|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Organizations|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Outposts|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Personal Health Dashboard|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS PrivateLink|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Proton|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Resilience Hub|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Resource Access Manager (RAM)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS RoboMaker|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Secrets Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Security Hub|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Server Migration Service (SMS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Serverless Application Repository|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Service Catalog|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Shield|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Single Sign-On|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Snowball|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Snowcone|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Snowmobile|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Step Functions|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Storage Gateway|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Support|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Systems Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Transfer Family|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Transit Gateway|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Trusted Advisor|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS VPN|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS WAF|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Well-Architected Tool|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS X-Ray|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Alexa for Business|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon API Gateway|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon AppFlow|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon AppStream 2.0|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Athena|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Augmented AI (A2I)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Aurora|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Braket|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Chime|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Cloud Directory|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon CloudFront|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon CloudSearch|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon CloudWatch|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon CodeGuru|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Cognito|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Comprehend|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Comprehend Medical|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Connect|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Detective|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon DevOps Guru|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon DocumentDB (with MongoDB compatibility)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon DynamoDB|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon EC2 Auto Scaling|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon ElastiCache|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Block Store (EBS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Compute Cloud (EC2)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Container Registry (ECR)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Container Service (ECS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic File System (EFS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Inference|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Kubernetes Service (EKS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic MapReduce (EMR)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Transcoder|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elasticsearch Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon EventBridge|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for Lustre|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for NetApp ONTAP|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for OpenZFS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for Windows File Server|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Forecast|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Fraud Detector|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon GameLift|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon GuardDuty|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon HealthLake|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Honeycode|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon IVS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Inspector|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kendra|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Keyspaces (for Apache Cassandra)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kinesis Data Analytics|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kinesis Data Firehose|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kinesis Data Streams|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kinesis Video Streams|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lex|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lightsail|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Location Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lookout for Metrics|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lookout for Vision|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lumberyard|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon MQ|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Macie|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Blockchain|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Grafana|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Service for Prometheus|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Streaming for Apache Kafka|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Workflows for Apache Airflow|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Neptune|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Nimble Studio|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Personalize|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Pinpoint|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Polly|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Quantum Ledger Database (QLDB)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon QuickSight|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon RDS on VMware|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Redshift|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Rekognition|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Relational Database Service (RDS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Route 53|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon SageMaker|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Email Service (SES)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Notification Service (SNS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Queue Service (SQS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Storage Service (S3)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Workflow Service (SWF)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Sumerian|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Textract|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Timestream|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Transcribe|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Transcribe Medical|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Translate|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Virtual Private Cloud (VPC)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon WorkDocs|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon WorkMail|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon WorkSpaces|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon WorkSpaces Application Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
CloudEndure Disaster Recovery|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
CloudEndure Migration|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Elastic Load Balancing|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
FreeRTOS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Red Hat OpenShift Service on AWS (ROSA)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
VMware Cloud on AWS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
### 207 Services

###  26 Regions 
### Region Summary # 
| Region Code | Region Name | no. of Supported Services | 
| ------ | -------- | -------- | 
us-east-1 | US East (N. Virginia) | 206
us-west-2 | US West (Oregon) | 200
eu-west-1 | Europe (Ireland) | 194
ap-southeast-2 | Asia Pacific (Sydney) | 187
ap-northeast-1 | Asia Pacific (Tokyo) | 187
eu-central-1 | Europe (Frankfurt) | 184
ap-southeast-1 | Asia Pacific (Singapore) | 179
us-east-2 | US East (Ohio) | 177
eu-west-2 | Europe (London) | 168
ap-northeast-2 | Asia Pacific (Seoul) | 164
ap-south-1 | Asia Pacific (Mumbai) | 157
ca-central-1 | Canada (Central) | 154
us-west-1 | US West (N. California) | 140
eu-north-1 | Europe (Stockholm) | 139
eu-west-3 | Europe (Paris) | 138
sa-east-1 | South America (Sao Paulo) | 138
ap-east-1 | Asia Pacific (Hong Kong) | 118
us-gov-west-1 | AWS GovCloud (US) | 118
me-south-1 | Middle East (Bahrain) | 116
eu-south-1 | Europe (Milan) | 108
af-south-1 | Africa (Cape Town) | 108
cn-north-1 | China (Beijing) | 100
cn-northwest-1 | China (Ningxia) | 98
ap-northeast-3 | Asia Pacific (Osaka-Local) | 96
us-gov-east-1 | AWS GovCloud (US-East) | 95
ap-southeast-3 |  Asia Pacific (Jakarta) | 63


### Number of Supported Services Per Region

<img src='https://quickchart.io/chart/render/zf-20efae61-8b8f-4414-88ac-0b4a0ec9ffd4'>

# Region and Service Table # 
| | ap-east-1 | ap-northeast-2 | ap-southeast-1 | ap-southeast-2 | ca-central-1 | eu-central-1 | eu-south-1 | me-south-1 | us-east-2 | us-west-2 | ap-northeast-1 | ap-south-1 | eu-north-1 | eu-west-1 | eu-west-2 | eu-west-3 | sa-east-1 | us-east-1 | us-west-1 | cn-northwest-1 | cn-north-1 | af-south-1 | ap-northeast-3 | ap-southeast-3 | us-gov-east-1 | us-gov-west-1 |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | -------------|
AWS Amplify|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS App Mesh|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS AppSync|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Application Discovery Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Application Migration Service (MGN)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Artifact|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Audit Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Auto Scaling|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Backup|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Batch|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Budgets|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Certificate Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Chatbot|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Cloud Map|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Cloud9|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CloudFormation|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CloudHSM|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CloudShell|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CloudTrail|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeArtifact|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeBuild|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeCommit|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeDeploy|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodePipeline|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeStar|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Compute Optimizer|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Config|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Control Tower|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Cost Explorer|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Cost and Usage Report|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Data Exchange|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Data Pipeline|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS DataSync|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Database Migration Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS DeepComposer|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS DeepLens|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS DeepRacer|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Device Farm|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Direct Connect|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Directory Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elastic Beanstalk|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elastic Disaster Recovery (DRS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaConnect|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaConvert|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaLive|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaPackage|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaStore|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaTailor|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Fargate|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Fault Injection Simulator|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Firewall Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Global Accelerator|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Glue|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Ground Station|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IQ|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Identity and Access Management (IAM)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT 1-Click|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Analytics|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Core|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Device Defender|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Device Management|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Events|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Greengrass|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT SiteWise|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Things Graph|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT TwinMaker|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Key Management Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Lake Formation|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Lambda|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS License Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Managed Services|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Marketplace|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Migration Hub|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Network Firewall|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS OpsWorks Stacks|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS OpsWorks for Chef Automate|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS OpsWorks for Puppet Enterprise|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Organizations|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Outposts|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Personal Health Dashboard|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS PrivateLink|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Proton|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Resilience Hub|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Resource Access Manager (RAM)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS RoboMaker|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Secrets Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Security Hub|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Server Migration Service (SMS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Serverless Application Repository|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Service Catalog|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Shield|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Single Sign-On|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Snowball|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Snowcone|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Snowmobile|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Step Functions|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Storage Gateway|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Support|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Systems Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Transfer Family|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Transit Gateway|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Trusted Advisor|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS VPN|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS WAF|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Well-Architected Tool|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS X-Ray|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Alexa for Business|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon API Gateway|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon AppFlow|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon AppStream 2.0|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Athena|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Augmented AI (A2I)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Aurora|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Braket|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Chime|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Cloud Directory|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon CloudFront|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon CloudSearch|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon CloudWatch|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon CodeGuru|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Cognito|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Comprehend|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Comprehend Medical|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Connect|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Detective|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon DevOps Guru|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon DocumentDB (with MongoDB compatibility)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon DynamoDB|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon EC2 Auto Scaling|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon ElastiCache|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Block Store (EBS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Compute Cloud (EC2)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Container Registry (ECR)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Container Service (ECS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic File System (EFS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Inference|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Kubernetes Service (EKS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic MapReduce (EMR)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Transcoder|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elasticsearch Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon EventBridge|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for Lustre|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for NetApp ONTAP|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for OpenZFS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for Windows File Server|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Forecast|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Fraud Detector|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon GameLift|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon GuardDuty|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon HealthLake|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Honeycode|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon IVS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Inspector|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kendra|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Keyspaces (for Apache Cassandra)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kinesis Data Analytics|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kinesis Data Firehose|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kinesis Data Streams|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kinesis Video Streams|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lex|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lightsail|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Location Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lookout for Metrics|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lookout for Vision|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lumberyard|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon MQ|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Macie|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Blockchain|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Grafana|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Service for Prometheus|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Streaming for Apache Kafka|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Workflows for Apache Airflow|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Neptune|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Nimble Studio|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Personalize|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Pinpoint|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Polly|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Quantum Ledger Database (QLDB)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon QuickSight|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon RDS on VMware|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Redshift|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Rekognition|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Relational Database Service (RDS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Route 53|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon SageMaker|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Email Service (SES)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Notification Service (SNS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Queue Service (SQS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Storage Service (S3)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Workflow Service (SWF)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Sumerian|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Textract|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Timestream|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Transcribe|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Transcribe Medical|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Translate|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Virtual Private Cloud (VPC)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon WorkDocs|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon WorkMail|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon WorkSpaces|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon WorkSpaces Application Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
CloudEndure Disaster Recovery|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
CloudEndure Migration|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Elastic Load Balancing|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
FreeRTOS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Red Hat OpenShift Service on AWS (ROSA)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
VMware Cloud on AWS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
### 207 Services

###  26 Regions 
### Region Summary # 
| Region Code | Region Name | no. of Supported Services | 
| ------ | -------- | -------- | 
us-east-1 | US East (N. Virginia) | 206
us-west-2 | US West (Oregon) | 200
eu-west-1 | Europe (Ireland) | 194
ap-southeast-2 | Asia Pacific (Sydney) | 187
ap-northeast-1 | Asia Pacific (Tokyo) | 187
eu-central-1 | Europe (Frankfurt) | 184
ap-southeast-1 | Asia Pacific (Singapore) | 179
us-east-2 | US East (Ohio) | 177
eu-west-2 | Europe (London) | 168
ap-northeast-2 | Asia Pacific (Seoul) | 164
ap-south-1 | Asia Pacific (Mumbai) | 157
ca-central-1 | Canada (Central) | 154
us-west-1 | US West (N. California) | 140
eu-north-1 | Europe (Stockholm) | 139
eu-west-3 | Europe (Paris) | 138
sa-east-1 | South America (Sao Paulo) | 138
ap-east-1 | Asia Pacific (Hong Kong) | 118
us-gov-west-1 | AWS GovCloud (US) | 118
me-south-1 | Middle East (Bahrain) | 116
eu-south-1 | Europe (Milan) | 108
af-south-1 | Africa (Cape Town) | 108
cn-north-1 | China (Beijing) | 100
cn-northwest-1 | China (Ningxia) | 98
ap-northeast-3 | Asia Pacific (Osaka-Local) | 96
us-gov-east-1 | AWS GovCloud (US-East) | 95
ap-southeast-3 |  Asia Pacific (Jakarta) | 63


<img src='https://quickchart.io/chart/render/zf-74c9b99a-4fdc-4a07-82a9-ca7feaf9fa35'>

# Region and Service Table # 
| | ap-east-1 | ap-northeast-2 | ap-southeast-1 | ap-southeast-2 | ca-central-1 | eu-central-1 | eu-south-1 | me-south-1 | us-east-2 | us-west-2 | ap-northeast-1 | ap-south-1 | eu-north-1 | eu-west-1 | eu-west-2 | eu-west-3 | sa-east-1 | us-east-1 | us-west-1 | cn-northwest-1 | cn-north-1 | af-south-1 | ap-northeast-3 | ap-southeast-3 | us-gov-east-1 | us-gov-west-1 |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | -------------|
AWS Amplify|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS App Mesh|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS AppSync|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Application Discovery Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Application Migration Service (MGN)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Artifact|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Audit Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Auto Scaling|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Backup|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Batch|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Budgets|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Certificate Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Chatbot|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Cloud Map|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Cloud9|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CloudFormation|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CloudHSM|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CloudShell|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CloudTrail|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeArtifact|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeBuild|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeCommit|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeDeploy|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodePipeline|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS CodeStar|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Compute Optimizer|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Config|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Control Tower|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Cost Explorer|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Cost and Usage Report|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Data Exchange|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Data Pipeline|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS DataSync|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Database Migration Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS DeepComposer|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS DeepLens|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS DeepRacer|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Device Farm|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Direct Connect|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Directory Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elastic Beanstalk|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elastic Disaster Recovery (DRS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaConnect|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaConvert|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaLive|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaPackage|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaStore|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Elemental MediaTailor|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Fargate|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Fault Injection Simulator|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Firewall Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Global Accelerator|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Glue|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Ground Station|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IQ|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Identity and Access Management (IAM)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT 1-Click|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Analytics|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Core|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Device Defender|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Device Management|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Events|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Greengrass|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT SiteWise|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT Things Graph|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS IoT TwinMaker|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Key Management Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Lake Formation|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Lambda|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS License Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Managed Services|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Marketplace|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Migration Hub|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Network Firewall|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS OpsWorks Stacks|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS OpsWorks for Chef Automate|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS OpsWorks for Puppet Enterprise|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Organizations|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Outposts|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Personal Health Dashboard|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS PrivateLink|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Proton|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Resilience Hub|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Resource Access Manager (RAM)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS RoboMaker|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Secrets Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Security Hub|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Server Migration Service (SMS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Serverless Application Repository|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Service Catalog|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Shield|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Single Sign-On|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Snowball|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Snowcone|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Snowmobile|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Step Functions|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Storage Gateway|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Support|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Systems Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Transfer Family|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Transit Gateway|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Trusted Advisor|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS VPN|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS WAF|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Well-Architected Tool|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS X-Ray|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Alexa for Business|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon API Gateway|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon AppFlow|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon AppStream 2.0|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Athena|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Augmented AI (A2I)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Aurora|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Braket|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Chime|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Cloud Directory|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon CloudFront|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon CloudSearch|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon CloudWatch|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon CodeGuru|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Cognito|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Comprehend|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Comprehend Medical|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Connect|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Detective|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon DevOps Guru|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon DocumentDB (with MongoDB compatibility)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon DynamoDB|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon EC2 Auto Scaling|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon ElastiCache|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Block Store (EBS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Compute Cloud (EC2)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Container Registry (ECR)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Container Service (ECS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic File System (EFS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Inference|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Kubernetes Service (EKS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic MapReduce (EMR)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elastic Transcoder|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Elasticsearch Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon EventBridge|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for Lustre|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for NetApp ONTAP|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for OpenZFS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for Windows File Server|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Forecast|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Fraud Detector|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon GameLift|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon GuardDuty|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon HealthLake|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Honeycode|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon IVS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Inspector|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kendra|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Keyspaces (for Apache Cassandra)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kinesis Data Analytics|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kinesis Data Firehose|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kinesis Data Streams|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Kinesis Video Streams|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lex|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lightsail|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Location Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lookout for Metrics|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lookout for Vision|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Lumberyard|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon MQ|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Macie|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Blockchain|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Grafana|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Service for Prometheus|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Streaming for Apache Kafka|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Managed Workflows for Apache Airflow|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Neptune|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Nimble Studio|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Personalize|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Pinpoint|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Polly|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Quantum Ledger Database (QLDB)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon QuickSight|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon RDS on VMware|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Redshift|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Rekognition|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Relational Database Service (RDS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Route 53|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon SageMaker|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Email Service (SES)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Notification Service (SNS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Queue Service (SQS)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Storage Service (S3)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Simple Workflow Service (SWF)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Sumerian|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Textract|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Timestream|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Transcribe|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Transcribe Medical|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Translate|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Virtual Private Cloud (VPC)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon WorkDocs|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon WorkMail|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon WorkSpaces|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon WorkSpaces Application Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
CloudEndure Disaster Recovery|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
CloudEndure Migration|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Elastic Load Balancing|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
FreeRTOS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Red Hat OpenShift Service on AWS (ROSA)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
VMware Cloud on AWS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
