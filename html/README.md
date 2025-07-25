# Welcome, finnacle, to the 2025 TDI Global Hackathon!

> [!IMPORTANT]
> This README may be **changed or overwritten** by the hackathon organisers during the event.
> If you intend to create documentation, please house it in a _separate file_.

## What's here? :scroll:

- [Your Hackathon Environment :candy:](#your-hackathon-environment_candy)
- [Login :door:](#login_door)
    - [Microsoft Azure :cloud:](#microsoft-azure_cloud)
    - [Google Cloud Platform :cloud:](#google-cloud-platform_cloud)
    - [GitHub :bookmark\_tabs:](#github_bookmark_tabs:)
    - [Terraform Cloud :hammer:](#terraform-cloud_hammer)
    - [RedHat OpenShift :rocket:](#redhat-openshift_rocket)
    - [Microsoft Teams :speech\_balloon:](#microsoft-teams_speech_balloon)
- [Hackathon Use Cases :dart:](#hackathon-use-cases_dart)
- [Code and Setup Tutorials :toolbox:](#code-and-setup-tutorials_toolbox)
- [FAQs :question:](#faqs_question)
- [When the time comes :broken\_heart:](#when-the-time-comes_broken_heart)

## Your Hackathon Environment :candy:

Your hackathon environment consists of the following components:

1. A **Google Cloud** project for your team, [see here](https://www.google.com/a/db-hackathon.com/ServiceLogin?continue=https://console.cloud.google.com) which allows you to consume Google Cloud (_within a pre-set budget_). :cloud:
1. A **Microsoft Azure** resource group for your team, [see here](http://portal.azure.com) which allows you to consume Azure. :cloud:
1. This **[GitHub repository](https://github.com/db-hackathon/finnacle)** which you can use to store your code. :bookmark_tabs:
1. A **Terraform Cloud** workspace [see here](https://app.terraform.io/app/db-hackathon-2025/workspaces/hack-team-finnacle) allowing you to deploy with [Terraform](https://developer.hashicorp.com/terraform/intro) into [GCP](https://cloud.google.com/docs/terraform). :hammer:
1. A _namespace_ in a shared **RedHat Openshift** cluster [see here](https://console-openshift-console.apps.hackathon.francecentral.aroapp.io) which can be used to deploy into Azure. :rocket:
1. A **Microsoft Teams** [instance](https://teams.microsoft.com/v2/) with
   a [global support team](https://teams.microsoft.com/l/team/19%3AanjLDL718QMHaZCH0sDgW6dz-Cl8Kcgb8EJvNVVqvo41%40thread.tacv2/conversations?groupId=7c337606-8e36-414f-946e-09ac1161aca5&tenantId=a8f249fb-91ee-4dd5-bf60-d1ec1330b078) and a dedicated MS Team for each hackathon team. :speech_balloon:

You have _considerable interactive access_ to your GCP project and Azure resource group. Using the GitHub repository, the Terraform Cloud workspace and RedHat OpenShift cluser are _entirely optional_ but may aid you.

## Login :door:

> [!CAUTION]
> Do not attempt logins, follow links, or otherwise conduct hackathon activity **from a DB device**.
> The whole event is designed to run **off DB's corporate infrastructure**.
> The instructions below are alternatively available on Confluence inside the DB network.
> It is entirely possible to follow these instructions from a mobile device running iOS or Android or a laptop.

> [!TIP]
> If you participated in the hacakthon _last year_ with the same personal email, you may have saved your password for your SSO account (that will be the same format). Last year's password **won't work on the initial login.**, you have a new Entra account (even with the same ID).

### How do I login? :movie_camera:

(The following is split into 3 videos due to a file size restrction of 100MB in GitHub per video)

https://github.com/user-attachments/assets/d28a9423-4989-4f28-acb8-34e26c2fb319

https://github.com/user-attachments/assets/a8302be4-c47d-4792-9dfd-d88d1f67dc6d

https://github.com/user-attachments/assets/7587c85f-631f-40ab-914e-6a49454f2098

### Register in the Plus You registration portal :clipboard:

Prior to the event you will have registered via the Plus You portal.

Ensure your **personal email**, team, location and **GitHub handle** are correctly entered in the user registration
portal (accessible _only from within the DB network_).

You can update your own details. If you do not have a GitHub handle, you [can create one for free](https://github.com/signup).

This is the _golden source_ for the configuration of the hackathon environment. We will take periodic updates from this in the opening hours of the event.

All registered users will get access to **Azure**, **GCP**, **HCP Terraform** and **OpenShift**, but only those that have listed a _valid GitHub handle_ will gain access to **GitHub**.

### Your Single Sign On (SSO) ID :passport_control:

Most of this year's tooling is connected to a [central Identity Provider (IdP)](https://www.cloudflare.com/en-gb/learning/access-management/what-is-an-identity-provider/), [Entra ID (formerly Azure Active
Directory)](https://learn.microsoft.com/en-us/entra/fundamentals/whatis).

Your ID in the IdP is **not the personal email address that you signed up** with, but rather a transformation of it.

To determine your ID, take the personal email you signed up with, replace the `@` with a `.` and add the suffix
`@db-hackathon.com`.

For example, `foo@bar.com` becomes `foo.bar.com@db-hackathon.com`.

This is the email/ID you should use when prompted for SSO login via Microsoft Entra ID.

### Login :link:  

#### [Microsoft Azure](http://portal.azure.com) :cloud:

Start with [Microsoft Azure](http://portal.azure.com) and use the SSO ID described above (e.g `foo.bar.com@db-hackathon.com`)

Use the **initial password** given in your briefing. Your team lead can remind you of it.

You will be _prompted to change it on first login_ and additionally set up [two factor authenication](https://www.microsoft.com/en-ie/security/business/security-101/what-is-two-factor-authentication-2fa). Please do so immediately.

#### [Google Cloud Platform](https://www.google.com/a/db-hackathon.com/ServiceLogin?continue=https://console.cloud.google.com) :cloud:

For [Google Cloud Platform](https://www.google.com/a/db-hackathon.com/ServiceLogin?continue=https://console.cloud.google.com), when logged in, you should be able to see a _project_ named after your team prefixed with `hack-team-` and a project named `hackathon-seed-2021` which contains a [storage bucket](https://console.cloud.google.com/storage/browser/hackathon_shared_storage;tab=objects?forceOnBucketsSortingFiltering=true&inv=1&invt=Ab2_Ug&project=hackathon-seed-2021) with shared materials for your consideration.


#### [GitHub](https://github.com/orgs/db-hackathon/sso) :bookmark_tabs:

For **GitHub**, only participants who _registered with a GitHub handle_ will be invited to [the GitHub organisation](https://github.com/db-hackathon). These participants will _receive an email at their registered personal email address_ with a convenient direct link to accept the invitation.

Attempt to [login to GitHub](https://github.com/orgs/db-hackathon/sso) via your SSO identity **first** (e.g `foo.bar.com@db-hackathon.com`). When prompted, you can then sign-in to GitHub with the handle/account _you registered with_ (e.g `foo-bar`). Once logged in, you will need to **accept the invitation** to the organisation `db-hackathon`.

> [!TIP]
> Some users report that they need to re-open the link from the email after the first GitHub and SSO log-in in order to see the invitation.

> [!TIP]
> You may not see the repository when you first log-in. Try again after **one hour** (as it may take some time for your user to propagate through).

#### [Terraform Cloud](https://app.terraform.io/sso/sign-in) :hammer:

For [Terraform Cloud](https://app.terraform.io/sso/sign-in), when prompted for _Organization Name_ use `db-hackathon-2025`.

If you _do not already have a_ HCP Terraform account associated with the email address you used to register for this event, you will be prompted to create one and link it to the above SSO ID. 

Alternatively, if you do already have HCP Terraform account, follow the option to `Link to existing HCP Terraform account`. 

Once logged in, you should be able to see a _workspace_ named after your team prefixed with `hack-team-`.

#### [Redhat OpenShift](TBC) :rocket:

Visit the [OpenShift Console](https://console-openshift-console.apps.hackathon.francecentral.aroapp.io), and selected Log in with **AAD** (Azure Active Directory a.k.a Entra).

#### [Microsoft Teams](http://teams.microsoft.com) :speech_balloon:

For [Microsoft Teams](http://teams.microsoft.com), you can access [via a browser](https://teams.microsoft.com/v2/) or via the [desktop app](https://www.microsoft.com/en-gb/microsoft-teams/download-app).

> [!TIP]
> The full desktop app is notably better for video calls and screen sharing, but all other facilities are equal.

### Getting Help :adhesive_bandage:

If you have difficulty with any of these steps:

* Prior to the event:
    * You can seek help inside the DB network _on a best-efforts basis_ in the DB Teams channel advertised
  in your briefing.

* During the event:
    * Preferably please [raise an issue in the support repo](https://github.com/db-hackathon/support/issues/new/choose),
      (or _ask a team member to do so on your behalf_ if you don't have access to GitHub). **This will be the fastest route to resolution**.
    * If you are in person at a location, look out for the **Global Enterprise Engineers (GEE's)** or other support staff.
    * Alternatively, raise it in the
      event [Microsoft Teams support channel](https://teams.microsoft.com/l/team/19%3AanjLDL718QMHaZCH0sDgW6dz-Cl8Kcgb8EJvNVVqvo41%40thread.tacv2/conversations?groupId=7c337606-8e36-414f-946e-09ac1161aca5&tenantId=a8f249fb-91ee-4dd5-bf60-d1ec1330b078),
      (or ask a team member to do so on your behalf).

## Google Cloud Platform :cloud:

### Usage :world_map:

The below APIs have been activated on your project. You **cannot activate APIs** yourselves.
* aiplatform.googleapis.com
* appengine.googleapis.com
* appengineflex.googleapis.com
* appenginereporting.googleapis.com
* artifactregistry.googleapis.com
* bigquery.googleapis.com
* bigqueryconnection.googleapis.com
* chat.googleapis.com
* cloudasset.googleapis.com
* cloudbuild.googleapis.com
* clouderrorreporting.googleapis.com
* cloudfunctions.googleapis.com
* cloudscheduler.googleapis.com
* cloudsupport.googleapis.com
* composer.googleapis.com
* contactcenteraiplatform.googleapis.com
* contactcenterinsights.googleapis.com
* dataflow.googleapis.com
* dataproc.googleapis.com
* datastudio.googleapis.com
* dialogflow.googleapis.com
* discoveryengine.googleapis.com
* documentai.googleapis.com
* eventarc.googleapis.com
* eventarcpublishing.googleapis.com
* fcm.googleapis.com
* firebase.googleapis.com
* firebaseinstallations.googleapis.com
* firestore.googleapis.com
* language.googleapis.com
* logging.googleapis.com
* monitoring.googleapis.com
* notebooks.googleapis.com
* pubsub.googleapis.com
* retail.googleapis.com
* run.googleapis.com
* secretmanager.googleapis.com
* servicemanagement.googleapis.com
* serviceusage.googleapis.com
* speech.googleapis.com
* sql-component.googleapis.com
* sqladmin.googleapis.com
* storage-api.googleapis.com
* storage-component.googleapis.com
* storage.googleapis.com
* storagetransfer.googleapis.com
* texttospeech.googleapis.com
* timeseriesinsights.googleapis.com
* translate.googleapis.com
* videointelligence.googleapis.com
* vision.googleapis.com
* workflowexecutions.googleapis.com
* workflows.googleapis.com
* workstations.googleapis.com

Every team member has the following roles granted at project level:
* organizations/984428091370/roles/serviceAccountMetadataViewer
* roles/aiplatform.migrator
* roles/aiplatform.tensorboardWebAppUser
* roles/aiplatform.user
* roles/appengine.appAdmin
* roles/appengine.appCreator
* roles/artifactregistry.admin
* roles/bigquery.connectionAdmin
* roles/bigquery.dataOwner
* roles/bigquery.resourceViewer
* roles/bigquery.user
* roles/bigquerydatapolicy.maskedReader
* roles/browser
* roles/chat.owner
* roles/cloudasset.viewer
* roles/cloudbuild.builds.approver
* roles/cloudbuild.builds.editor
* roles/cloudbuild.connectionAdmin
* roles/cloudbuild.integrationsOwner
* roles/cloudbuild.integrationsViewer
* roles/cloudbuild.workerPoolOwner
* roles/cloudfunctions.developer
* roles/cloudscheduler.admin
* roles/cloudsql.admin
* roles/cloudsupport.techSupportEditor
* roles/cloudtranslate.editor
* roles/composer.admin
* roles/contactcenteraiplatform.admin
* roles/contactcenterinsights.editor
* roles/dataflow.developer
* roles/dataproc.editor
* roles/datastore.owner
* roles/datastudio.viewer
* roles/dialogflow.admin
* roles/discoveryengine.admin
* roles/documentai.editor
* roles/errorreporting.admin
* roles/eventarc.developer
* roles/firebase.admin
* roles/iam.roleViewer
* roles/logging.admin
* roles/monitoring.editor
* roles/notebooks.admin
* roles/notebooks.legacyViewer
* roles/oauthconfig.viewer
* roles/pubsub.editor
* roles/retail.admin
* roles/run.admin
* roles/secretmanager.admin
* roles/servicemanagement.quotaViewer
* roles/serviceusage.serviceUsageConsumer
* roles/speech.editor
* roles/storage.admin
* roles/storagetransfer.admin
* roles/timeseriesinsights.datasetsEditor
* roles/visionai.editor
* roles/workflows.editor
* roles/workstations.admin
* roles/workstations.networkAdmin

You have an **infrastructure SA** `infrastructure@hack-team-finnacle.iam.gserviceaccount.com` with the same IAM permissions as team members.

You can authenticate as it from a [GitHub Actions workflow](https://docs.github.com/en/actions/get-started/understanding-github-actions) _anywhere in this repo_ using the [Workload Identity Federation](https://cloud.google.com/iam/docs/workload-identity-federation) method of Google's [auth action](https://github.com/google-github-actions/auth)
and run `gcloud` commands using Google's [setup-gcloud Action](https://github.com/google-github-actions/setup-gcloud).

There's an [example workflow in your repo](./.github/workflows/example_using_gcloud.yml) to start you off.

This SA is also used when you _provision infrastructure_ using your [Terraform Cloud workspace](https://app.terraform.io/app/db-hackathon-2025/workspaces/hack-team-finnacle).

You also have a **workload SA** `workload@hack-team-finnacle.iam.gserviceaccount.com` that you can use to attach to your workloads (e.g. Cloud Run revisions).

The default SAs _have been de-privileged_.

The workload SA has the following roles granted at project level:
* roles/aiplatform.user
* roles/artifactregistry.createOnPushWriter
* roles/bigquery.connectionUser
* roles/bigquery.dataEditor
* roles/bigquery.dataViewer
* roles/bigquery.filteredDataViewer
* roles/bigquery.jobUser
* roles/bigquery.readSessionUser
* roles/bigquerydatapolicy.maskedReader
* roles/chat.owner
* roles/cloudasset.viewer
* roles/cloudbuild.builds.builder
* roles/cloudbuild.tokenAccessor
* roles/cloudbuild.workerPoolUser
* roles/cloudfunctions.invoker
* roles/cloudsql.client
* roles/cloudsql.instanceUser
* roles/cloudtranslate.user
* roles/composer.worker
* roles/contactcenteraiplatform.viewer
* roles/contactcenterinsights.viewer
* roles/dataflow.admin
* roles/dataflow.worker
* roles/dataproc.hubAgent
* roles/dataproc.worker
* roles/datastore.user
* roles/datastudio.editor
* roles/dialogflow.client
* roles/dialogflow.reader
* roles/discoveryengine.admin
* roles/documentai.apiUser
* roles/errorreporting.writer
* roles/eventarc.connectionPublisher
* roles/eventarc.eventReceiver
* roles/eventarc.publisher
* roles/logging.logWriter
* roles/monitoring.metricWriter
* roles/notebooks.runner
* roles/pubsub.publisher
* roles/pubsub.subscriber
* roles/retail.editor
* roles/run.invoker
* roles/secretmanager.secretAccessor
* roles/secretmanager.secretVersionAdder
* roles/servicemanagement.quotaViewer
* roles/serviceusage.serviceUsageConsumer
* roles/speech.client
* roles/storage.objectViewer
* roles/storagetransfer.transferAgent
* roles/storagetransfer.user
* roles/timeseriesinsights.datasetsEditor
* roles/visionai.admin
* roles/workflows.invoker

#### Use a custom/user-managed Service Account wherever possible :unlock:

The default compute service account in your project _has been de-privileged_.

Whenever you provision compute (e.g. a VMs powering a Jupyter notebook or dataflow pipeline, a Cloud Run service or a
Cloud Function) you must attach your **Workload SA** `workload@hack-team-finnacle.iam.gserviceaccount.com` , usually referred to in the GCP documentation as _"attaching a custom SA"_.

Both your [GitHub Actions workflows](./.github/workflows/) and [Terraform Cloud workspace](https://app.terraform.io/app/db-hackathon-2025/workspaces/hack-team-finnacle) have pre-populated variables containing the Workload
SA email.

See the respective sections below for details.

Examples:

* [App Engine](https://cloud.google.com/appengine?hl=en)
    * [gcloud](https://cloud.google.com/appengine/docs/legacy/standard/python/user-managed-service-accounts#gcloud)
    * [Terraform - Flex](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/app_engine_flexible_app_version#service_account)
    * [Terraform - Standard](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/app_engine_standard_app_version#service_account)
* [Cloud Build](https://cloud.google.com/build?hl=en)
    * [gcloud](https://cloud.google.com/build/docs/securing-builds/configure-user-specified-service-accounts)
        * Ensure you specify
          the [--service-account=workload@hack-team-finnacle.iam.gserviceaccount.com](https://cloud.google.com/sdk/gcloud/reference/builds/submit#--service-account)
          parameter of `gcloud builds submit`
        * And additional specify
          the [--config=...](https://cloud.google.com/sdk/gcloud/reference/builds/submit#--config) parameter where you
          set the logging
          option [CLOUD_LOGGING_ONLY](https://cloud.google.com/build/docs/securing-builds/store-manage-build-logs#store-logs).
    * [Terraform](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/cloudbuild_trigger#service_account_email)
* [Cloud Composer](https://cloud.google.com/composer?hl=en)
    * [Console](https://cloud.google.com/composer/docs/how-to/managing/creating#console)
    * [gcloud](https://cloud.google.com/composer/docs/how-to/managing/creating#gcloud)
    * [Terraform](https://cloud.google.com/composer/docs/how-to/managing/creating#terraform)
* [Cloud Functions](https://cloud.google.com/functions?hl=en)
    * [Console](https://cloud.google.com/functions/docs/securing/function-identity#console)
    * [gcloud](https://cloud.google.com/functions/docs/securing/function-identity#gcloud)
    * [Terraform - Gen1](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/cloudfunctions_function#service_account_email)
    * [Terraform - Gen2](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/cloudfunctions2_function#service_account_email)
* [Cloud Run](https://cloud.google.com/run?hl=en)
    * [Console](https://cloud.google.com/run/docs/securing/service-identity#console)
    * [gcloud](https://cloud.google.com/run/docs/securing/service-identity#gcloud)
    * [Terraform](https://cloud.google.com/run/docs/securing/service-identity#terraform)
* [Dataflow](https://cloud.google.com/dataflow/docs/concepts/security-and-permissions#specify_a_user-managed_worker_service_account)
    * [Terraform](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/dataflow_job#service_account_email)
    * [Terraform - Flex](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/dataflow_flex_template_job#parameters)
* [Cloud Scheduler](https://cloud.google.com/scheduler/docs?gclsrc=aw.ds&gad_source=1&gad_campaignid=20376984227&gclid=CjwKCAjw4efDBhATEiwAaDBpboW0I164la0GbnEBo_PTcemx4h7bsZOwIGmz0FGEnd4jP624uUU7eRoCo18QAvD_BwE)
    * [Schedules](https://cloud.google.com/run/docs/triggering/using-scheduler#create_job)
    * [Tasks](https://cloud.google.com/run/docs/triggering/using-tasks#creating_http_tasks_with_authentication_tokens)
    * [Terraform](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/cloud_scheduler_job#service_account_email)
* [Dataproc](https://cloud.google.com/dataproc?hl=en)
    * [Console](https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/service-accounts#console)
    * [gcloud](https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/service-accounts#gcloud-command)
    * [Terraform](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/dataproc_cluster#service_account)
* Notebooks
    * [Console](https://cloud.google.com/vertex-ai/docs/workbench/user-managed/create-new#console) - see step 9 within
    * [gcloud](https://cloud.google.com/sdk/gcloud/reference/notebooks/instances/create#--service-account)
    * [Terraform](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/notebooks_instance#service_account)
* [Workflows](https://cloud.google.com/workflows/docs/authentication#deploy_a_workflow_with_a_custom_service_account)
    * [Terraform](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/workflows_workflow#service_account)
* [Vertex AI Workbench instances](https://cloud.google.com/vertex-ai/docs/workbench/instances/create)
* [Vertex AI generally](https://cloud.google.com/vertex-ai/docs/general/custom-service-account#attach)
    * Vertex AI's Console UI does not always expose the field necessary to specify a user managed SA.  
      However, most such screens have a `View Code` button in the top right.
      The generated code is populated with the fields you entered in the UI.
      Using the curl option. you can add the missing attribute in a text editor
      (typically `"serviceAccount": "workload@hack-team-finnacle.iam.gserviceaccount.com"`, to be added as a peer of the `"name": "..."`
      or `"displayName" : "..."` attribute)
      and execute the resulting command in Cloud Shell.

Here's an example for tuning a language model:

```shell
PROJECT_ID="hack-team-finnacle"

curl \
-X POST \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json; charset=utf-8" \
https://europe-west4-aiplatform.googleapis.com/v1/projects/hack-team-finnacle/locations/europe-west4/pipelineJobs?pipelineJobId=tune-large-model-$(date +"%Y%m%d%H%M%S") -d \
$'{
    "displayName": "tune-large-model",    
    "serviceAccount": "workload@hack-team-move.iam.gserviceaccount.com", 
    "runtimeConfig": {
        "gcsOutputDirectory": "gs://artifacts.hack-team-finnacle.appspot.com/Foo/",
        "parameterValues": {
            "location": "us-central1",
            "project": "hack-team-finnacle",
            "large_model_reference": "text-bison@001",
            "model_display_name": "mytunedmodel_1",
            "train_steps": 100,
            "encryption_spec_key_name": "",
            "dataset_uri": "gs://artifacts.hack-team-finnacle.appspot.com/Bar.jsonl",
            "evaluation_data_uri": "",
            "evaluation_output_root_dir": "",
            "learning_rate": 3
        }
    },
    "templateUri": "https://us-kfp.pkg.dev/ml-pipeline/large-language-model-pipelines/tune-large-model/v2.0.0"
}'
```

### Limitations & Restrictions :honey_pot:

> [!WARNING]  
> Your GCP project will be **torn down** if you approach 100% or if you are spending rapidly.

* You have a budget of **EUR ~250**.
  Your _team lead_ will receive _email notifications_ when your actual or _forecast_ spend passes 25%, 50%, 75%, 90% and 100%. If
  you are the team lead **please cascade this information** to your fellow team members.
* Fairly _severe quotas_ are in place to help manage the above.
  Talk to the happy hackathon helpers if this is impeding your idea.
* You **cannot create services accounts**.
    * Use your infrastructure SA (see above) to interact with GCP from GitHub.
    * Use your workload SA (see above) to power your workloads.
* You **cannot create or upload service account keys**.
    * Use your own interactive access or Workload Identity Federation from GitHub Actions workflows instead.

#### Developing in Google Cloud Console & Cloud Shell :shell:

Built into the Google Cloud Console is a Shell & Editor. [Google Cloud Shell](https://cloud.google.com/shell/docs) is already provisioned with a lot of the standard development tools including:

- `git`
- `kubectl`
- `docker`
- `helm`
- `terraform`
- `gcloud` cli
- & more.

To access cloud shell simply click the **Cloud Shell** Icon in the top right hand corner of your Cloud Console Window.

Cloud Shell will activate at the bottom of your Cloud Console window. You can also access the inbuilt IDE for code
development and Git access etc by clicking the **Open Editor** button from within Cloud Shell.

From here you could easily clone your team's GitHub repositories and start iterating on your hackathon solution.

#### Setting up Cloud Shell for Development 

Simply run the following commands to auth your cloud shell against your Google Cloud Account.

1. Simply run `gcloud auth login` and follow the prompts to complete OAuth2 Auth from Cloud Shell to your Cloud
   Project (Using your `foo.bar.com@db-hackathon.com` credential.)
2. Configure your default Cloud Shell Google Cloud Project by running `gcloud config set project hack-team-finnacle`

#### [GCP Example Apps](https://github.com/db-hackathon/support/tree/main/google-examples) :globe_with_meridians:

TBC

## [GitHub](https://github.com/db-hackathon/finnacle) :bookmark_tabs:

### Usage :world_map:

This repository is at your disposal. All team members have **maintainer** access.

No branch protection rules are enforced.

A set of useful [GitHub Actions variables](https://docs.github.com/en/actions/learn-github-actions/variables) have been
populated for you:
* vars.INFRA_SA_EMAIL - The email address representation of the SA you can use to deploy infrastructure. It has the same access rights as human team members.: infrastructure@hack-team-finnacle.iam.gserviceaccount.com
* vars.INFRA_SA_ID - The fully qualified ID representation of the SA you can use to deploy infrastructure.: projects/hack-team-finnacle/serviceAccounts/infrastructure@hack-team-finnacle.iam.gserviceaccount.com
* vars.PROJECT_ID - Your team's GCP Project ID.: hack-team-finnacle
* vars.PROJECT_NUMBER - Your teams' GCP Project Number.: 359434648480
* vars.WORKLOAD_IDENTITY_PROVIDER - The ID of the Workload Identity provider you cah use to authenticate from GitHub Actions to your GCP project.: projects/785558430619/locations/global/workloadIdentityPools/github-2023/providers/github-2023
* vars.WORKLOAD_SA_EMAIL - The email address representation of the SA you can attach to your workloads (e.g. to a Cloud Run service). : workload@hack-team-finnacle.iam.gserviceaccount.com
* vars.WORKLOAD_SA_ID - The fully qualified ID representation of the SA you can attach to your workloads (e.g. to a Cloud Run service). : projects/hack-team-finnacle/serviceAccounts/workload@hack-team-finnacle.iam.gserviceaccount.com

#### Github Copilot :robot:

All Github users have access to Github Copilot, for more details look [here](#github-documentation)

### Limitations & Restrictions :honey_pot:

* The hackathon platform **owns the files that were seeded** into this repo. If you modify them, your changes may be overwritten.
* We have a hard limit of `50,000` GitHub Actions minutes for the whole hackathon. We request heavy user consider offloading what they can to Cloud Build instead.
* We have a hard limit of `50GB` of GitHub Actions and Packages storage for the whole hackathon.
    * If you produce **very large** GitHub Actions logs, please _clean them up in a timely manner_.
    * If you want to **publish container images**, please use [GCP Artifact Registry](https://cloud.google.com/artifact-registry/docs).
    * For other artefacts, consider using [Cloud Storage](https://cloud.google.com/storage?hl=en).

## [Terraform Cloud](https://app.terraform.io/app/db-hackathon-2025/workspaces/hack-team-finnacle)

### Usage :world_map:

Your Terraform Cloud workspace is [VCS driven](https://developer.hashicorp.com/terraform/tutorials/cloud-get-started/cloud-vcs-change) by this GitHub repository.

Pushing files to the `/terraform` directory of this repo will automatically trigger a plan/apply cycle in TFC
using the contents of that directory as the root module.

The workspace has been pre-configured so that the [google](https://registry.terraform.io/providers/hashicorp/google/latest/docs)go and [google-beta](https://registry.terraform.io/providers/hashicorp/google-beta/latest) providers will authenticate using your
infrastructure SA and default to creating resources in your project.

There's a [simple example](./terraform/main.tf) to start you off.

A set of useful [Input variables](https://developer.hashicorp.com/terraform/language/values/variables) have been
populated for you:
* infra_sa_email - The email address representation of the SA you can use to deploy infrastructure. It has the same access rights as human team members.: infrastructure@hack-team-finnacle.iam.gserviceaccount.com
* infra_sa_id - The fully qualified ID representation of the SA you can use to deploy infrastructure.: projects/hack-team-finnacle/serviceAccounts/infrastructure@hack-team-finnacle.iam.gserviceaccount.com
* project_id - Your team's GCP Project ID.: hack-team-finnacle
* project_number - Your teams' GCP Project Number.: 359434648480
* workload_identity_provider - The ID of the Workload Identity provider you cah use to authenticate from GitHub Actions to your GCP project.: projects/785558430619/locations/global/workloadIdentityPools/github-2023/providers/github-2023
* workload_sa_email - The email address representation of the SA you can attach to your workloads (e.g. to a Cloud Run service). : workload@hack-team-finnacle.iam.gserviceaccount.com
* workload_sa_id - The fully qualified ID representation of the SA you can attach to your workloads (e.g. to a Cloud Run service). : projects/hack-team-finnacle/serviceAccounts/workload@hack-team-finnacle.iam.gserviceaccount.com

## OpenShift :rocket:

### Usage :world_map:

TBC

### Limitations & Restrictions :honey_pot:

TBC

### Interactive Access :computer:

TBC

## Microsoft Azure :cloud:

### Usage :world_map:

Each team has a Resource Group in which they have broad administrative access.

Training materials are available [here](https://dbaihackathon2024outlook.sharepoint.com/sites/HakathonTraining/SitePages/TrainingHome.aspx).

A user guide is available [here](https://storage.cloud.google.com/hackathon_shared_storage/Hackathon2024AzureUserGuide.docx).

## [Microsoft Teams](https://teams.microsoft.com/v2/) :speech_balloon:

### Usage :world_map:

There is a [global support team](https://teams.microsoft.com/l/team/19%3AanjLDL718QMHaZCH0sDgW6dz-Cl8Kcgb8EJvNVVqvo41%40thread.tacv2/conversations?groupId=7c337606-8e36-414f-946e-09ac1161aca5&tenantId=a8f249fb-91ee-4dd5-bf60-d1ec1330b078)
and a dedicated Team for each participant team.

You can use all the Teams functionalities including chat, group chat, voice/video and meetings.
To support you during the event the team [DB Global Hackathon Support](https://teams.microsoft.com/l/team/19%3AanjLDL718QMHaZCH0sDgW6dz-Cl8Kcgb8EJvNVVqvo41%40thread.tacv2/conversations?groupId=7c337606-8e36-414f-946e-09ac1161aca5&tenantId=a8f249fb-91ee-4dd5-bf60-d1ec1330b078) has been created and within this team there are various channels:

1. **General** - Use this for any general question about the event.
2. **GitHub Support** - Use this channel for any question related to GitHub.
3. **Google Support** - Use this channel for any question or issue with the Google platform.
4. **Microsoft Support** - Use this channel for any question or issue with the Microsoft platform.
5. **HashiCorp Support** - Use this channel for any question or issue with the HashiCorp platform.
6. **RedHat Support** - Use this channel for any question or issue with the RedHat (OpenShift) platform.

The team [DB Global Hackathon Support](https://teams.microsoft.com/l/team/19%3AanjLDL718QMHaZCH0sDgW6dz-Cl8Kcgb8EJvNVVqvo41%40thread.tacv2/conversations?groupId=7c337606-8e36-414f-946e-09ac1161aca5&tenantId=a8f249fb-91ee-4dd5-bf60-d1ec1330b078) is public, you can discover this team by using the Browse Teams

## Hackathon Use Cases :dart:

These are detailed in the [briefing pack](https://storage.cloud.google.com/hackathon_shared_storage/TeamLeadBriefingDeck.pdf), but to
summarise here:

* TBC

## Code and Setup Tutorials :toolbox:

#### Google Cloud Platform

* [Google Cloud Generative AI Training Resources](https://cloud.google.com/blog/topics/training-certifications/new-google-cloud-generative-ai-training-resources)

#### Microsoft / OpenAI

* [Microsoft Azure and OpenAI Hackathon Sharepoint Training Site](https://dbaihackathon2024outlook.sharepoint.com/sites/HakathonTraining)
* [Available Services in Azure](https://storage.cloud.google.com/hackathon_shared_storage/Hack%20Dementia%20Azure%20Environment%20Information.pptx)
* [Get Started with Microsoft Azure Power Apps, Power Automate and AI Builder](https://learn.microsoft.com/en-us/collections/g6r3irnpjjz8mj)
* [Microsoft Co-Pilot Studio](https://www.microsoft.com/en-us/microsoft-copilot/microsoft-copilot-studio)
* [Microsoft AI Builder](https://learn.microsoft.com/en-us/ai-builder/overview)
* [Get started using GPT-35-Turbo and GPT-4 with Azure OpenAI Service](https://learn.microsoft.com/en-us/azure/ai-services/openai/chatgpt-quickstart?tabs=command-line%2Cpython-new&pivots=programming-language-studio)

#### GitHub Documentation

* [GitHub Copilot documentation](https://docs.github.com/en/enterprise-cloud@latest/copilot)
* [How to install and the features of GitHub Copilot that are more relevant to the end users](https://docs.github.com/en/enterprise-cloud@latest/copilot/setting-up-github-copilot/setting-up-github-copilot-for-yourself) (
  ignoring the first step as you will be providing them from the enterprise/organization):
* [Installing the extensions into your supported IDEs](https://docs.github.com/en/enterprise-cloud@latest/copilot/managing-copilot/configure-personal-settings/installing-the-github-copilot-extension-in-your-environment)
  note there are a number of tabs on this page that you can select for the dedicated supported IDE which are Azure Data
  Studio, JeBrains IDEs, Vim/Neovim, Visual Studio and Visual Studio Code
* [Links to what features GitHub Copilot gives you and how to use it](https://docs.github.com/en/enterprise-cloud@latest/copilot/using-github-copilot)
* [Video on getting started with GitHub Copilot](https://www.youtube.com/watch?v=dhfTaSGYQ4o)

#### Additional useful guides

1. [Hackathon Briefing Pack](https://storage.cloud.google.com/hackathon_shared_storage/TeamLeadBriefingDeck.pdf)

## FAQs :question:

#### Authenticating with GCP APIs from code

You may feel a need for an API key or SA key in order to auth with GCP APIs. In general, you don't, you can invoke the supported services when running locally via a gcloud login (to your account):

```bash
gcloud auth login foo.bar.com@db-hackathon.com
gcloud auth application-default login
```

When running on GCP-native compute using Google's client libraries or gcloud, as long as you've attached your Workload
SA to the compute, the magic
of [Application Default Credentials](https://cloud.google.com/docs/authentication/application-default-credentials) will
kick in and the code will auth correctly.
When not using Google's client libraries, you can obtain an access token from
the [metadata server](https://cloud.google.com/compute/docs/access/create-enable-service-accounts-for-instances#applications).
You can pass this to the client libraries/gcloud/curl e.g.

```bash
curl -X POST \
-H "Authorization: Bearer $ACCESS_TOKEN" \
```

When running on OCP, the value of the secret `gcp-access` in your team's namespace will have a valid access token for
your Workload SA.

#### How do I deploy Cloud Run?

There are examples in this repository!
You can find a [gcloud example here](./.github/workflows/example_deploy_cloud_run_gcloud.yml),
and a [Terraform example here](./terraform/example_cloud_run.tf).

#### How do I deploy App Engine?

There are examples in this repository!
You can find a [gcloud example here](./.github/workflows/example_deploy_app_engine_gcloud.yml)
and a [Terraform example here](./terraform/example_app_engine.tf).

#### How do I deploy Cloud Functions?

There are examples in this repository!
You can find a [gcloud example here](./.github/workflows/example_deploy_cloud_function_gcloud.yml)
and a [Terraform example here](./terraform/example_cloud_functions.tf).

#### How do I build an image with Cloud Build?

See the section ["Use a custom user-managed SA"](#use-a-customuser-managed-service-account-wherever-possible) above.
When using a Dockerfile, you'll likely end up with something like:

```bash
gcloud builds submit --tag "$GCP_REGION-docker.pkg.dev/$GCP_PROJECT/my_service" \
  --service-account="projects/$GCP_PROJECT/serviceAccounts/$WORKLOAD_SA_EMAIL" \
  --default-buckets-behavior=regional-user-owned-bucket
```

## When the time comes :broken_heart:

It's sad to think about the end of the event but when the time does come, you will have **two hours from the end of the closing ceremony** to export anything from GCP that you wish to retain.

After this time we will deactivate the billing link on your project and **all of your resources will instantly be torn
down**.

Your GitHub repository will remain available until the end of the day on **25th July**.

If you wish to retain its contents, please clone it before this time.
