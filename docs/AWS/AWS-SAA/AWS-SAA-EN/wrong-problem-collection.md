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
  more streamlined and modern approach to lift-and-shift migrations.

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
  120 days, it cannot directly handle point-in-time recovery, which requires native RDS automated backups.

- You cannot configure a multi-AZ DB instance to run in another Region, it must be in the same Region but in a different
  Availability Zone.

- You cannot create an RDS Read Replica of a database that is running on Amazon EC2. You can only create read replicas
  of databases running on Amazon RDS.

- Amazon CloudFront cannot be configured with 'a pair of static IP addresses'

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

- a hybrid environment by running containers in AWS Fargate for cloud workloads and Amazon ECS Anywhere for on-premises
  workloads. ECS Anywhere enables on-premises servers to join ECS clusters.

- Shield is used to protect against DDoS attacks.

- Route 53 records with a geoproximity and geolocation

- Please note that you can multi-attach an EBS volume to multiple EC2 instances but the instances must be in the same
  AZ.

- storage gateway is used on-premises.

- VIF = Virtual Interface

- SMB = Server Message Block

- Storage Gateway replicated files end up on Amazon S3.

- S3 Multi-Region Access Points allow the application to route user requests automatically to the nearest S3 bucket
  based on network conditions and proximity, minimizing latency and avoiding public network congestion. It also provides
  failover capabilities with minimal management effort.

- AWS Organizations provides policy-based management for multiple AWS accounts. With Organizations, you can create
  member accounts that are part of your organization and centrally manage your accounts.

- AWS Transit Gateway connects VPCs and on-premises networks through a central hub. It is a network transit hub, not a
  user authentication and management service. It doesn't directly address the need for centralized corporate directory
  service integration.

- Amazon Cognito is primarily used to add user sign-up, sign-in, and access control to your web and mobile apps quickly
  and easily. It isn't typically used in multi-account management scenarios and isn't directly relevant to the
  requirement for corporate directory service integration.

- With MySQL, authentication is handled by AWSAuthenticationPlugin—an AWS-provided plugin that works seamlessly with IAM
  to authenticate your IAM users.

- You cannot configure MySQL to directly use the AWS STS.

- Distinguish between IAM role and IAM user

- The name Lustre is derived from “Linux” and “cluster”

- You cannot configure CloudTrail logs to be sent directly to an SQS queue.

- The primary difference between AWS Shield and WAF is that while AWS WAF can mitigate DDoS attacks at layer 7 of the
  OSI reference model, AWS Shield protects web services from DDoS attacks at layer 3 and 4 of the OSI reference model.

- While AWS Secrets Manager can store and manage sensitive information, it doesn't directly encrypt Kubernetes Secrets
  and ConfigMaps stored in the etcd key-value store.

- Amazon EBS fast snapshot restore (FSR) enables you to create a volume from a snapshot that is fully initialized at
  creation. This eliminates the latency of I/O operations on a block when it is accessed for the first time. Volumes
  that are created using fast snapshot restore instantly deliver all their provisioned performance.

- With EBS you can encrypt your volume and automate volume-level backups using snapshots that are run by Data Lifecycle
  Manager.

- Amazon API Gateway's canary release deployments. This allows the company to gradually roll out the new API version,
  initially exposing only a small percentage of their users to the new API. As they monitor the system and confirm that
  the new API is working as expected, they can increase the percentage of traffic directed to the new version.

- Amazon Aurora with MySQL compatibility is a good fit for achieving high availability and improved performance. Aurora
  automatically distributes the data across multiple AZs in a single region. Additionally, Aurora allows the creation of
  up to 15 Aurora Replicas that share the same underlying volume as the primary instance. Directing reporting functions
  to the Aurora Replica is an effective way to offload reporting workloads from the primary database.

- CloudFront signed cookies are a method to control who can access your content. When a user authenticates and is
  verified as an enrolled student, the application can set a cookie in the student's browser. The cookie contains the
  same information that can be included in a signed URL but applies to multiple files in one or multiple directories.

- You cannot reference a security group from another region. Security groups are region-specific and can only be
  referenced within the same region.



