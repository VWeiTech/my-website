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

