terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "3.0.2"
    }
  }
}

provider "docker" {}

# Create an Ubuntu image resource
resource "docker_image" "ubuntu_image" {
  name = "ubuntu:latest"
}

# Create a Docker container based on the Ubuntu image
resource "docker_container" "ubuntu_cont" {
  name  = "ubuntu_cont"
  image = docker_image.ubuntu_image.image_id
  ports {
    internal = 8000
    external = 8000
  }
  command = ["sh", "-c", "sleep infinity"]
  network_mode = "bridge"
}

