# aws-region-table-parser
Currently AWS has no API to query which service available in which region.  
This project scrapes their [Regional Product Services](http://aws.amazon.com/about-aws/global-infrastructure/regional-product-services/) url and creates a serviceName to region map as a [json object](https://github.com/burib/aws-region-table-parser/blob/master/data/parseddata.json). ( runs every day at 12:00 UTC noon )

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
      "us-gov-west-1": true,
      "us-gov-east-1": true,
      "eu-west-1": true,
      "eu-central-1": true,
      "eu-west-2": true,
      "eu-west-3": true,
      "eu-north-1": true,
      "ap-southeast-1": true,
      "ap-northeast-1": true,
      "ap-northeast-3": false,
      "ap-southeast-2": true,
      "ap-northeast-2": true,
      "ap-south-1": true,
      "cn-north-1": true,
      "cn-northwest-1": true
    },
    ...
   },
   "serviceNames": {
      "lambda": "AWS Lambda"
   },
   "edgeLocations": [],
   "regionalEdgeCaches": []
}
```

### There is also an API, that you can use to run querys.
https://github.com/burib/aws-region-table-parser-api

#### How to Initiate a new Parsing
 ```bash 
npm start
```
