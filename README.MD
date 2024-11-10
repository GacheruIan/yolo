# YOLO Project - Client Setup on Kubernetes

This guide provides steps to deploy and access the YOLO project's client component on Kubernetes using Minikube.

## Prerequisites
- Ensure Minikube is installed and running.
- Set up Minikube tunnel to expose LoadBalancer services locally.

## Kubernetes Configuration Files

The Kubernetes configurations for deploying the client component are located in the `k8s/` directory.

### 1. Client Deployment (`client-deployment.yaml`)
Defines the client deployment by specifying:
- **Replicas**: Ensures one instance of the client pod.
- **Containers**: Deploys the client image `iangacheru/my-client:1.1`, exposes container port 80, and defines CPU and memory resources.

### 2. Client Service (`client-service.yaml`)
Exposes the client application on a NodePort:
- **NodePort**: Exposes the client service externally via port 30080.
- **Selector**: Targets the client deployment.

### 3. Ingress (`ingress.yaml`)
Configures HTTP access routes to the client and backend:
- **Rules**: Sets `192.168.49.2.nip.io` as the host and directs traffic for `/` to `client-service` (client app) and `/backend` to `backend-service`.

## Steps to Deploy

1. **Start Minikube**  
   Make sure Minikube is running:
   ```
   minikube status

2. **Enable Minikube Tunnel**
   Run Minikube tunnel in a separate terminal to allow LoadBalancer services to be accessible:

   ```
   minikube tunnel

3. **Deploy the Client Application Apply the Kubernetes manifests in the k8s/ directory**
   ```
   kubectl apply -f k8s/


4. **Access the Client Application Use kubectl port-forward to map local port 8080 to the client service port 80:**
   ```
   kubectl port-forward svc/client-service 8080:80

   ```
   
   ***Access the client application at http://localhost:8080.***
<p align="center">
  <img src="../yolo/client/src/images/ks8client.png" alt="deployment"/>
</p>




