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
- Download repo
- Copy featureToggle folder to `stage/src` directory in your Active Workspace installation root
- Use `awbuild` to build and publish to the file repo.

## Usage
After building and publishing the code, the features are disabled by default. You can enable/disable the features by setting the appropriate preference values to true/false in the featureToggle_prefs.xml file and importing into Teamcenter


#### **commandToggle**
* Make sure *FT_commandToggle_is_feature_enabled* preference value is set to 'true' in **featureToggle_prefs.xml** file
![screenshot](/screenshots/commandToggle_pref.png)

* Import **featureToggle_prefs.xml** file using the following command:

    preferences_manager -u=infodba -p=infodba -g=dba -mode=import -scope=SITE -file=featureToggle_prefs.xml -action=override

* Add to *AWC_StartupPreferences* by importing the **awc_startup_prefs.xml** file using the following command:

    preferences_manager -u=infodba -p=infodba -g=dba -mode=import -scope=SITE -file=awc_startup_prefs.xml -action=merge

* Check to see commandToggle custom command enabled on the global navigation bar of the home page (thumbs up icon)
![screenshot](/screenshots/commandToggle_enabled.png)




