const ideas = [
  "🔧 CI/CD pipeline with Jenkins + GitHub Actions",
  "📦 Dockerize a Flask or Node.js app and deploy to AWS ECS",
  "📊 Integrate Prometheus + Grafana to monitor Kubernetes pods",
  "📂 Build a file cleaner or log parser in Python",
  "🚀 Use Terraform to provision a VPC + EKS + RDS on AWS",
  "🔒 Implement secrets management using HashiCorp Vault",
  "🌍 Set up global CDN and WAF using Cloudflare or AWS CloudFront",
];

const listElement = document.getElementById("ideas-list");

ideas.forEach((idea) => {
  const li = document.createElement("li");
  li.textContent = idea;
  listElement.appendChild(li);
});
