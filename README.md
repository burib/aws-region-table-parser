# aws-region-table-parser [![CircleCI](https://circleci.com/gh/burib/aws-region-table-parser/tree/master.svg?style=svg&circle-token=0216314fa5eab836a73cca4db64855592a592a2d)](https://circleci.com/gh/burib/aws-region-table-parser/tree/master)
Currently AWS has no API to query which service available in which region.  
This project scrapes their [Regional Product Services](http://aws.amazon.com/about-aws/global-infrastructure/regional-product-services/) url and creates a serviceName to region map as a json object.

Example:
```json
{
   "services": {
    "lambda": {
      "us-east-1": true,
      "us-east-2": true,
      "us-west-2": true,
      "us-west-1": true,
      "ca-central-1": true,
      "sa-east-1": true,
      "amazonaws-us-gov": true,
      "eu-west-1": true,
      "eu-central-1": true,
      "eu-west-2": true,
      "eu-west-3": true,
      "ap-southeast-1": true,
      "ap-northeast-1": true,
      "ap-southeast-2": true,
      "ap-northeast-2": true,
      "ap-south-1": true,
      "cn-north-1": true,
      "cn-northwest-1": false
    },
    ...
   },
   "serviceNames": {
      "lambda": "AWS Lambda"
   }
}
```

### There is also an API, that you can use to run querys.
https://github.com/burib/aws-region-table-parser-api

#### How to Initiate a new Parsing
 ```bash 
npm start
```
