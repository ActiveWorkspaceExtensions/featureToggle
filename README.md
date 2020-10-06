# Overview
This repo is intended to demonstrate toggling AWC features through Teamcenter preferences. The featureToggle kit is a
custom Active Workspace client kit which contains the following modules:

##
* **Module**: commandToggle
* **Description**: toggles visibility of a command based on Teamcenter preference
##

## Version
Active Workspace 4.3

## Build
- Download reop
- Copy featureToggle folder to `stage/src` directory in your Active Workspace installation root
- Use `awbuild` to build and publish to the file repo.

## Usage
After building and publishing the code, the features are disabled by default. You can enable/disable the features by setting the appropriate preference values to true/false in the featureToggle_prefs.xml file and importing into Teamcenter


#### commandToggle
Import featureToggle_pref.xml file using the following command:

    preferences_manager -u=infodba -p=infodba -g=dba -mode=import -scope=SITE -file=featureToggle_pref.xml -action=override

This will enable the custom button on the global navigation bar of the home page

    screenshot here



