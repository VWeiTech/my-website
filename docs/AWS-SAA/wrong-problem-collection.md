- you can only put ALBs in front of the web tier, not the DB tier.
- GWLB is specifically designed to simplify the deployment of security appliances. Using GWLB endpoints in service
  accounts ensures efficient routing and centralized inspection of traffic.
- TLS encrypts data only in transit, not during processing. Additionally, SSE-S3 does not meet the compliance
  requirement of using client-specific encryption keys.
- AWS Config cannot prevent resource creation or modification. It can detect noncompliance but requires additional tools
  like Lambda for remediation
- you cannot save data to EBS from Kinesis.
- AWS Lambda is not optimal for this use case due to its constraints on memory and runtime, particularly with large ML
  models and batch requests.
- A NAT gateway is used for outbound traffic not inbound traffic and cannot make the application available to
  internet-based clients.
- CloudFront is ideal for caching static or frequently accessed content. For real-time APIs where caching is not
  effective, CloudFront would not address latency issues for international users.
- AWS SMS(Server Migration Service) has been deprecated in favor of AWS Application Migration Service, which provides a
  more streamlined and
  modern approach to lift-and-shift migrations.
- Security groups are an instance-level firewall used for controlling access to AWS resources
- Server certificates are SSL/TLS certificates that you can use to authenticate with some AWS services
- EBS volumes are not encrypted by default
- SSL certificates will only be useful to encrypt data in transit, not data at rest.
- You can only specify one launch configuration for an EC2 Auto Scaling group at a time, and you can't modify a launch
  configuration after you've created it.
- When setting up an ASG with a combined purchasing model, you can specify the base capacity of the group to be
  fulfilled by On-Demand instances. As the ASG scales in or scales out, EC2 Auto Scaling ensures the base capacity is
  fulfilled using On-Demand instances and anything beyond that be fulfilled with either only Spot instances or a
  specified percentage mix of On-Demand or Spot instances.
- You cannot manually associate or disassociate a public IP address from your instance
- You cannot change the CMK key that is used to encrypt a volume
- Though there is no minimum duration when storing data in S3 Standard, you cannot transition to Standard IA within 30
  days.
- AWS Global Accelerator does not directly support S3 buckets as an endpoint. Configuring Global Accelerator would
  require additional infrastructure, such as custom endpoints, increasing the effort and complexity without directly
  solving the latency issues.
- S3 File Gateway is designed for file-based workloads rather than block storage.
- iSCSI = Internet Small Computer System Interface
- Amazon Security Lake is purpose-built for centralizing security data. It minimizes development effort by automatically
  collecting and formatting data into the Open Cybersecurity Schema Framework (OCSF) for analysis.
- Gateway endpoints are only for S3 and DynamoDB.
- The AWS Network Firewall is a managed service that makes it easy to deploy essential network protections for all your
  Amazon Virtual Private Clouds, and you can then use domain list rules to block HTTP or HTTPS traffic to domains
  identified as low-reputation, or that are known or suspected to be associated with malware or botnets.
- Amazon Redshift is better suited for analytical queries and is not optimized for real-time sentiment analysis. This
  solution introduces higher costs and complexity compared to using Amazon Comprehend and DynamoDB.
- RDS automated backups support up to 35 days of retention and point-in-time recovery. AWS Backup can retain backups for
  120 days, it cannot directly handle point-in-time recovery, which requires native
  RDS automated backups.
- You cannot configure a multi-AZ DB instance to run in another Region, it must be in the same Region but in a different
  Availability Zone.
- You cannot create an RDS Read Replica of a database that is running on Amazon EC2. You can only create read replicas
  of databases running on Amazon RDS.
- Amazon CloudFront cannot be configured with “a pair of static IP addresses
- NLB is not optimized for traffic inspection. Additionally, VPC peering lacks centralized management and scalability
  for large organizations.
- VPC endpoints do not inherently support routing all traffic through a centralized appliance and lack the capability
  for deep packet inspection.
- Lambda@Edge is not used to direct traffic to on-premises origins.
- You cannot use self-signed certificates with RDS.
- Amplify is better suited for modern full-stack applications, not static web hosting.
- The AWS Storage Gateway Tape Gateway enables you to replace using physical tapes on premises with virtual tapes in AWS
  without changing existing backup workflows. Tape Gateway emulates physical tape libraries, removes the cost and
  complexity of managing physical tape infrastructure, and provides more durability than physical tapes.
- EventBridge is not suitable for handling high-frequency batch image processing tasks. AWS Lambda’s limitations also
  make it unsuitable for this scenario.
- detailed monitoring provides metrics at 1-minute intervals, which allows the operations team to quickly detect and
  analyze potential bottlenecks during the sales event. CloudWatch natively supports metrics for both EC2 and RDS.
- Amazon Kinesis Data Streams should be used for near-real time or real-time use cases instead of Amazon SQS.
- You do not need to use the SCT as you are migrating into the same destination database engine (RDS is just the
  platform).
- AWS Direct Connect is used for establishing private connections between on-premises environments and AWS, not for
  connecting to third-party SaaS providers within AWS.
- AWS Glue simplifies ETL workflows and supports attaching security configurations to enforce client-specific encryption
  with KMS keys.
- stopping operations ensures a clean cutover process, allowing the organization to launch the migrated instances in AWS
  with minimal disruption to business operations.
- Systems Manager Agent is useful for post-migration operations and management, it is not directly involved in the
  lift-and-shift migration process.
- Use AWS Compute Optimizer for recommendations on EC2 instances and Auto Scaling groups. Use Amazon Data Lifecycle
  Manager to evaluate cost optimizations for the EBS volumes: This requires separate configurations for different
  resources, increasing complexity compared to a single AWS Compute Optimizer setup.
- Regional Reserved Instances is incorrect. This type of reservation does not reserve capacity.
- You cannot use Amazon EFS for Windows instances as this is not supported.
- IRSA = IAM roles for service accounts
- This is incorrect because S3 Object Lock applies to specific objects, not the entire bucket, and there is no
  WORM-specific configuration required beyond compliance mode.







