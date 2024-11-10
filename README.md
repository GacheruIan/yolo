# YOLO Project - Full Stack Deployment on Kubernetes

This guide provides steps to deploy and access both the client and backend components of the YOLO project on Kubernetes using Minikube.

## Prerequisites
- Ensure Minikube is installed and running.
- Set up Minikube tunnel to expose LoadBalancer services locally.
- Kubernetes configuration files are located in the `k8s/` directory.

## Kubernetes Configuration Files

The Kubernetes configurations for deploying the client and backend components are located in the `k8s/` directory.

### 1. Client Deployment (`client-deployment.yaml`)
Defines the client deployment by specifying:
- **Replicas**: Ensures one instance of the client pod.
- **Containers**: Deploys the client image `iangacheru/my-client:1.1`, exposes container port 80, and defines CPU and memory resources.

### 2. Client Service (`client-service.yaml`)
Exposes the client application on a NodePort:
- **NodePort**: Exposes the client service externally via port 30080.
- **Selector**: Targets the client deployment.

### 3. Backend Deployment (`backend-deployment.yaml`)
Defines the backend deployment, including:
- **Replicas**: Specifies the desired number of backend instances (typically 2 or more for high availability).
- **Containers**: Deploys the backend container (e.g., `my-backend-image:latest`), with port 5000 exposed to interact with the frontend.

### 4. Backend Service (`backend-service.yaml`)
Exposes the backend application within the Kubernetes cluster:
- **ClusterIP**: Exposes the backend service internally for communication with the client application.
- **Selector**: Targets the backend deployment.

### 5. MongoDB Deployment (`mongo-deployment.yaml`)
Defines the MongoDB deployment in Kubernetes:
- **Replicas**: Ensures one replica of the MongoDB pod.
- **Containers**: Deploys the MongoDB container with port 27017 exposed.

### 6. MongoDB Service (`mongo-service.yaml`)
Exposes the MongoDB service internally:
- **ClusterIP**: Provides a stable endpoint for MongoDB that other services can connect to.

### 7. MongoDB Persistent Volume (`mongo-pv.yaml`)
Defines the PersistentVolume (PV) for MongoDB to store data on the host machine.

### 8. MongoDB Persistent Volume Claim (`mongo-pvc.yaml`)
Defines the PersistentVolumeClaim (PVC) that binds to the MongoDB PV, allowing the MongoDB deployment to use the volume.

### 9. Ingress (`ingress.yaml`)
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

3. **Deploy the Client Application**
   Apply the Kubernetes manifests in the k8s/ directory

   ```
   kubectl apply -f k8s/


4. **Access the Client Application Use kubectl port-forward to map local port 8080 to the client service port 80:**
   ```
   kubectl port-forward svc/client-service 8080:80

   ```
   
   ***Access the client application at http://localhost:8080.***

   <img src="./client/src/images/social_icons/IP33.png" alt="deployment" />

5. **Access the Backend API Use kubectl port-forward to map local port 5000 to the backend service port 5000:**

   ```
   kubectl port-forward svc/backend-service 5000:5000

   ```
   ***Access the backend API at http://localhost:5000***

6. **Verify MongoDB Access**
 If your client interacts with MongoDB, you can check the MongoDB data by running the following command in a pod:
   ```
   kubectl exec -it yourmongopodname -- mongo --host mongo-service --port 27017

   ```
