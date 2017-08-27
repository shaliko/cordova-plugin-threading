#import <Cordova/CDV.h>

@interface Echo : CDVPlugin

- (void)echo:(CDVInvokedUrlCommand*)command;

- (void)myPluginMethod:(CDVInvokedUrlCommand*)command;

@end
