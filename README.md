# featureToggle
Demonstrate toggling AWC features through Teamcenter preferences

## version
Active Workspace 4.3

## build
- Create a new folder under `stage/src`, called `featureToggle`.
- Download the contents of this repository to the new folder
- Use `awbuild` to build and publish to the file repo.

## usage
After building and publishing the code, the feature is disabled by default. Log into AWC and you should see no changes to the global navigation bar on the left hand side of the home page.

    screenshot here

 You must enable the feature by defining the appropriate Teamcenter preference and setting the value to 'true'.

### <b>Creating Teamcenter preference</b>
Import featureToggle_pref.xml file using the following command:

    preferences_manager -u=infodba -p=infodba -g=dba -mode=import -scope=SITE -file=featureToggle_pref.xml -action=override

This will enable the custom button on the global navigation bar of the home page

    screenshot here



