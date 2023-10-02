#!/bin/bash
mvn clean install -f application/karaf-features
mvn clean install -f application/karaf-offline
mvn clean install -f application/docker -Pcreate-docker-image-x86_64


scp ./application/docker/target/edemokracia-application-*_docker_image_x86_64.tar robert.csakany@edemokracia.judo.technology:/tmp/edemokracia_image.tar

#scp ./update-image.sh robert.csakany@edemokracia.judo.technology:/tmp/update-image.sh

#ssh robert.cskaany@edemokracia.judo.technology /tmp/update-image.sh
