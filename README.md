# aws-region-table-parser [![CircleCI](https://circleci.com/gh/burib/aws-region-table-parser.svg?style=svg)](https://circleci.com/gh/burib/aws-region-table-parser)
Currently AWS has no public information about the number of services it provides and service per region availability.
This project is intended to provide a [human readable MARKDOWN](https://github.com/burib/aws-region-table-parser/blob/master/README.md) and a [machine readable JSON](https://raw.githubusercontent.com/burib/aws-region-table-parser/master/data/parseddata.json) format about the service and region statistics.

<!--START_SECTION:region_summary-->
  
### 212 Services

###  30 Regions 
### Summary # 
| Region Code | Region Name | no. of Supported Services | 
| ------ | -------- | -------- | 
us-east-1 | US East (N. Virginia) | 211
us-west-2 | US West (Oregon) | 205
eu-west-1 | Europe (Ireland) | 199
ap-southeast-2 | Asia Pacific (Sydney) | 194
ap-northeast-1 | Asia Pacific (Tokyo) | 193
eu-central-1 | Europe (Frankfurt) | 191
ap-southeast-1 | Asia Pacific (Singapore) | 185
us-east-2 | US East (Ohio) | 184
eu-west-2 | Europe (London) | 177
ap-northeast-2 | Asia Pacific (Seoul) | 168
ca-central-1 | Canada (Central) | 165
ap-south-1 | Asia Pacific (Mumbai) | 165
sa-east-1 | South America (Sao Paulo) | 146
eu-north-1 | Europe (Stockholm) | 145
eu-west-3 | Europe (Paris) | 145
us-west-1 | US West (N. California) | 145
us-gov-west-1 | AWS GovCloud (US) | 127
ap-east-1 | Asia Pacific (Hong Kong) | 126
me-south-1 | Middle East (Bahrain) | 121
eu-south-1 | Europe (Milan) | 114
af-south-1 | Africa (Cape Town) | 114
us-gov-east-1 | AWS GovCloud (US-East) | 103
ap-northeast-3 | Asia Pacific (Osaka-Local) | 101
cn-north-1 | China (Beijing) | 101
cn-northwest-1 | China (Ningxia) | 100
ap-southeast-3 | Asia Pacific (Jakarta) | 87
me-central-1 | Middle East (UAE) | 61
eu-central-2 | Europe (Zurich) | 51
eu-south-2 | Europe (Spain) | 49
ap-south-2 | Asia Pacific (Hyderabad) | 49


### Number of Supported Services Per Region

<img src='https://quickchart.io/chart/render/sf-f7b28f06-f129-4611-87ba-ed0406cb7771'>

# Region and Service Table # 
| | ap-east-1 | ap-northeast-2 | ap-southeast-1 | ap-southeast-2 | ca-central-1 | eu-central-1 | eu-south-1 | me-south-1 | us-east-2 | us-west-2 | ap-northeast-1 | ap-south-1 | eu-north-1 | eu-west-1 | eu-west-2 | eu-west-3 | sa-east-1 | us-east-1 | us-west-1 | cn-northwest-1 | ap-northeast-3 | ap-southeast-3 | cn-north-1 | af-south-1 | eu-central-2 | eu-south-2 | us-gov-east-1 | me-central-1 | us-gov-west-1 | ap-south-2 |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | -------------|
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
AWS Chime|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
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
AWS IoT TwinMaker|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Key Management Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Lake Formation|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Lambda|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS License Manager|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
AWS Mainframe Modernization|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
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
AWS Private Certificate Authority|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
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
Amazon EventBridge|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for Lustre|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for NetApp ONTAP|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for OpenZFS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon FSx for Windows File Server|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon File Cache|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
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
Amazon MemoryDB for Redis|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Neptune|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon Nimble Studio|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Amazon OpenSearch Service|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
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
Amazon Security Lake|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
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
Amazon WorkSpaces Web|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
CloudEndure Disaster Recovery|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
CloudEndure Migration|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Elastic Load Balancing|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
FreeRTOS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
Red Hat OpenShift Service on AWS (ROSA)|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
VMware Cloud on AWS|:white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark:
<!--END_SECTION:region_summary-->
