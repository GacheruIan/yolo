# -*- mode: ruby -*-
# vi: set ft=ruby :

VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "ubuntu/jammy64" 
  config.vm.network "forwarded_port", guest: 80, host: 8080 
  config.vm.provider "virtualbox" do |vb|
    vb.memory = "512" 
    vb.cpus = 1      
  end
end
