<%@ Page Language="C#" MasterPageFile="~masterurl/default.master" Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage,Microsoft.SharePoint,Version=15.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c" %>

<%@ Import Namespace="Microsoft.SharePoint.ApplicationPages" %>
<%@ Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="asp" Namespace="System.Web.UI" Assembly="System.Web.Extensions, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" %>
<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Import Namespace="Microsoft.SharePoint" %>
<%@ Assembly Name="Microsoft.Web.CommandUI, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>


<asp:Content ID="PageHead" ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">

    <script type="text/javascript" src="/_layouts/15/sp.runtime.js"></script>
    <script type="text/javascript" src="/_layouts/15/sp.js"></script>

</asp:Content>

<asp:Content ID="Main" ContentPlaceHolderID="PlaceHolderMain" runat="server">
</asp:Content>

<asp:Content ID="PageTitle" ContentPlaceHolderID="PlaceHolderPageTitle" runat="server">
    Angular 2 Site Page
</asp:Content>

<asp:Content ID="PageTitleInTitleArea" ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server">

    <hello-angular2></hello-angular2>

    <script>window.Zone = undefined</script>
    <script src="https://unpkg.com/core-js/client/shim.min.js"></script>
    <script src="https://unpkg.com/zone.js@0.6.25?main=browser"></script>
    <script src="https://unpkg.com/reflect-metadata@0.1.8"></script>
    <script src="https://unpkg.com/rxjs@5.0.0-beta.12/bundles/Rx.js"></script>
    <script src="https://unpkg.com/@angular/core@2.1.1/bundles/core.umd.js"></script>
    <script src="https://unpkg.com/@angular/common@2.1.1/bundles/common.umd.js"></script>
    <script src="https://unpkg.com/@angular/compiler@2.1.1/bundles/compiler.umd.js"></script>
    <script src="https://unpkg.com/@angular/platform-browser@2.1.1/bundles/platform-browser.umd.js"></script>
    <script src="https://unpkg.com/@angular/platform-browser-dynamic@2.1.1/bundles/platform-browser-dynamic.umd.js"></script>

    <script type="text/javascript">


        (function (app) {

            app.AppService =
              ng.core.Class({
                  constructor: function () { },
                  getCurrentUser: function () {
                      return Rx.Observable.create(function (observer) {
                          this.ctx = new SP.ClientContext.get_current();
                          this.user = this.ctx.get_web().get_currentUser();
                          this.ctx.load(this.user);
                          this.ctx.executeQueryAsync(
                              Function.createDelegate(this, function () {
                                  observer.next("Welcome, " + this.user.get_title() + "!");
                              }),
                              Function.createDelegate(this, function (sender, args) {
                                  observer.error(args.get_message());
                              }));
                      });
                  }
              });

            app.AppComponent =
              ng.core.Component({
                  selector: 'hello-angular2',
                  template: '<h1>{{greeting | async}}</h1>',
                  providers: [app.AppService]
              })
              .Class({
                  constructor: [app.AppService, function (svc) {
                      this.greeting = svc.getCurrentUser();
                  }]
            });

            app.AppModule =
              ng.core.NgModule({
                  imports: [ng.platformBrowser.BrowserModule],
                  declarations: [app.AppComponent],
                  bootstrap: [app.AppComponent]
              })
              .Class({
                  constructor: function () { }
              });

            document.addEventListener('DOMContentLoaded', function () {
                ng.platformBrowserDynamic
                  .platformBrowserDynamic()
                  .bootstrapModule(app.AppModule);
            });

        })(window.app || (window.app = {}));




    </script>



</asp:Content>
