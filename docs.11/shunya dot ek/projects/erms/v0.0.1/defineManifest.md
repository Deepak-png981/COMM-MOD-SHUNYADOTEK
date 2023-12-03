## Define Manifest ERMS v0.0.1

**Version**: 0.0.1  
**Author**: Brajesh Mishra
**Date**: 29/11/2023

## TABLE OF CONTENT

1. [Introduction](#1-introduction)
  
   1.1. [Aim and Purpose](#11-aim-and-purpose)
  
   1.2. [Objectives](#12-objectives)
2. [Project Overview](#2-project-overview)
3. [Project Management](#3-project-management)
   3.1. [Stakeholders](#31-stakeholders)

   3.2. [Roles and Responsibilities](#32-roles-and-responsibilities)
   
   3.3. [Communication Plan](#33-communication-plan)
   
   3.4. [Project Timeline](#34-project-timeline)
   
   3.5. [Risk Management](#35-risk-management)
   
   3.6. [Change Management](#36-change-management) 

   
   3.7. [Version Control](#37-version-control)
4. [Software Development](#4-software-development)
   
   4.1. [System Design (High-Level Overview)](#41-system-design-high-level-overview)
   
   4.2. [Entities](#42-entities)
   
   4.3. [Relationships](#43-relationships)
   
   4.4. [Actions](#44-actions)
   
   4.5. [System Level Roles and Responsibilities](#45-system-level-roles-and-responsibilities)
   
   4.6. [Entity Level Roles and Responsibilities](#46-entity-level-roles-and-responsibilities)
   
   4.7. [Backend](#47-backend)
      4.7.1. [Backend Technologies](#471-backend-technologies)
   
      4.7.2. [Backend Microservices](#472-backend-microservices)
   
      4.7.3. [API Gateway](#473-api-gateway)
   
      4.7.4. [Common Libraries (Generic Classes)](#474-common-libraries-generic-classes)
   
   4.8. [Frontend](#48-frontend)
      
      4.8.1. [Frontend Framework](#481-frontend-framework)
      
      4.8.2. [User Interface (UI) Design](#482-user-interface-ui-design)
      
      4.8.3. [Client-Side Routing](#483-client-side-routing)
      
      4.8.4. [State Management](#484-state-management)
      
      4.8.5. [Responsive Design](#485-responsive-design)
      
      4.8.6. [Accessibility](#486-accessibility)
      
      4.8.7. [Cross-Browser Compatibility](#487-cross-browser-compatibility)
      
      4.8.8. [Frontend Components](#488-frontend-components)
      
      4.8.9. [Frontend Events](#489-frontend-events)
5. [Guidelines](#5-guidelines)
   5.1. [Folder Structure](#51-folder-structure)
      
      5.1.1. [Folder Structure (Backend)](#511-folder-structure-backend)
      
      5.1.2. [Folder Structure (Frontend)](#512-folder-structure-frontend)
   
   5.2. [Naming Convention](#52-naming-convention)
6. [Testing and Quality Assurance](#6-testing-and-quality-assurance)
7. [Data Management](#7-data-management)
8. [Legal and Compliance](#8-legal-and-compliance)
9. [Project Closure and Evaluation](#9-project-closure-and-evaluation)
   
   9.1. [User Documentation](#91-user-documentation)
   
   9.2. [Feedback and Improvement](#92-feedback-and-improvement)
   
   9.3. [Code of Conduct](#93-code-of-conduct)
   
   9.4. [Knowledge Transfer](#94-knowledge-transfer)
   
   9.5. [Disaster Recovery Plan](#95-disaster-recovery-plan)
   
   9.6. [Performance Requirements](#96-performance-requirements)
   
   9.7. [Procurement Plan](#97-procurement-plan)
   
   9.8. [Cultural Considerations](#98-cultural-considerations)
   
   9.9. [Events/APIs](#99-eventsapis)
   
   9.10. [Product-Specific Details Key](#910-product-specific-details-key)
10. [Working of the Software](#10-working-of-the-software)
11. [Glossary](#11-glossary)



## 1. Introduction
### 1.1 Aim and Purpose
   - The aim of the Entity Record Management System (ERMS) is to create a robust and efficient system for managing entity records within organizations.
   - The purpose is to streamline data governance, improve data quality, and enhance access to entity-related information.

### 1.2 Objectives
   - Develop a user-friendly interface for creating, updating, and retrieving entity records.
   - Implement data quality checks to ensure accuracy, completeness, and consistency of entity records.
   - Enable role-based access control to protect sensitive entity data.
   - Provide audit trail functionality for tracking changes to entity records.

## 2. Project Overview
   - The ERMS project aims to revolutionize the way organizations manage their entity records.
   - It will offer a comprehensive solution for storing, organizing, and securing entity data.

## 3. Project Management
### 3.1 Stakeholders
   - Key stakeholders include project sponsors, developers, data administrators, and end-users.
   - Each stakeholder group has distinct interests in the success of ERMS.

### 3.2 Roles and Responsibilities
   - Project Manager: [Name]
   - Lead Developer: [Name]
   - Data Administrator: [Name]
   - End-User Representative: [Name]

### 3.3 Communication Plan
   - Regular status meetings will be held to ensure effective communication among team members.
   - A project mailing list will facilitate email communication.

### 3.4 Project Timeline
   - Project Start Date: [Date]
   - Expected Completion Date: [Date]
   - Milestones:
     - Project Charter Approval
     - Design Document Completion
     - Backend Development
     - Frontend Development
     - Testing and Quality Assurance
     - User Documentation
     - Project Closure

### 3.5 Risk Management
   - Identified risks include scope creep, data security vulnerabilities, and resource constraints.
   - Mitigation strategies will be developed for each identified risk.

### 3.6 Change Management
   - A formal change request process will be in place to evaluate and implement changes to project scope.

### 3.7 Version Control
  Developers work in the develop/{{serviceName}}/version branch on an ongoing basis, making changes and improvements to the service.

When it's time to prepare a new release, a release branch is created from the develop/{{serviceName}}/version branch. The release branch will have a specific version number associated with it.

The release branch is then used for final testing, quality assurance, and any necessary adjustments before the release version is considered stable.

Once the release version is confirmed to be stable, it can be merged into the main production branch for deployment.


## 4. Software Development

# 4. System Design (High-Level Overview)

## 4.1. Architecture Overview

The RMS architecture is designed to be user-centric and robust, ensuring seamless interaction for users and secure, efficient backend processing.

- **Frontend**: A straightforward user interface that allows users to interact with the RMS, perform record entries, conduct searches, and generate reports. It is designed to be accessible and responsive across various devices and platforms.
  
- **Backend**: This is the core of the RMS, responsible for managing logic, database operations, user authentication, and server-side data processing. It ensures that all user actions on the frontend are executed accurately and securely in the database.


#### 4.2. Entities

1. **User**
   - *Description*: Represents system users who may have different levels of access and responsibilities.

2. **Task**
   - *Description*: Work items or actions to be completed within a project.

3. **Project**
   - *Description*: Central entity for managing and storing comprehensive details about projects.

4. **Organization**
   - *Description*: Entity representing the company or entity that owns the projects.

5. **Team**
   - *Description*: Represents groups working on projects.

6. **Issue**
   - *Description*: Problems or challenges that arise during a project's lifecycle.

7. **User Profile**
   - *Description*: Contains extended information about a user.

8. **Milestone**
   - *Description*: Key goals and deliverables within a project's timeline.

9. **Budget**
   - *Description*: Financial planning and tracking for a project.

10. **Risk**
    - *Description*: Potential future events that could affect project outcomes.

11. **Attachment**
    - *Description*: Files or documents linked to records within the system.

12. **Comment/Note**
    - *Description*: User-generated notes or comments on tasks or issues for additional context.

13. **Log (Audit Trail)**
    - *Description*: Records of all actions taken within the RMS for compliance and auditing.

14. **Calendar Event**
    - *Description*: Events, meetings, and deadlines scheduled within the project's lifecycle.

15. **Time Track**
    - *Description*: Recording of time spent by users on tasks for productivity and billing purposes.

16. **Access Control List (ACL)**
    - *Description*: Specifies access rights and permissions for users on different RMS entities.

17. **Role**
    - *Description*: Defines sets of access permissions and responsibilities within the RMS.

18. **Permission**
    - *Description*: Specific access rights that can be assigned to roles for performing certain actions within the RMS.

#### 4.3. Relationships

- **User <-> Organization**
   - *Relationship*: Users belong to an organization.
   - *Description*: Each user is associated with a specific organization, which determines their access and responsibilities within the system.

- **User <-> Team**
   - *Relationship*: Users are members of one or more teams.
   - *Description*: Users can be part of one or more teams, allowing them to collaborate with others on projects and tasks.

- **User <-> Role**
   - *Relationship*: Users are assigned roles.
   - *Description*: Users are assigned specific roles within the system, which define their access permissions and responsibilities.

- **Role <-> Permission**
   - *Relationship*: Roles are granted specific permissions.
   - *Description*: Each role is associated with a set of permissions that determine what actions users with that role can perform in the system.

- **Project <-> Team**
   - *Relationship*: Projects are associated with one or more teams.
   - *Description*: Projects may involve multiple teams working together to accomplish project goals.

- **Project <-> Milestone**
   - *Relationship*: Projects have multiple milestones.
   - *Description*: Projects are divided into milestones, which represent key goals and deliverables within the project's timeline.

- **Project <-> Budget**
   - *Relationship*: Projects have budget allocations.
   - *Description*: Each project can have a budget allocated to it, which is used for financial planning and tracking.

- **Project <-> Risk**
   - *Relationship*: Projects are associated with potential risks.
   - *Description*: Projects can have identified risks that could impact their outcomes, and these risks need to be monitored and managed.

- **Task <-> Project**
   - *Relationship*: Tasks belong to a project.
   - *Description*: Tasks are work items or actions that need to be completed within a specific project.

- **Task <-> User**
    - *Relationship*: Users are assigned tasks.
    - *Description*: Users are assigned specific tasks within projects, indicating their responsibilities and workload.

- **Issue <-> Project**
    - *Relationship*: Issues are associated with a project.
    - *Description*: Issues represent problems or challenges that arise during a project's lifecycle and need to be resolved.

- **Attachment <-> Entity**
    - *Relationship*: Attachments are linked to various system entities.
    - *Description*: Attachments, such as files or documents, can be linked to records within the system to provide additional context or documentation.

- **Comment/Note <-> Entity**
    - *Relationship*: Comments/Notes are related to various system entities.
    - *Description*: Users can add comments or notes to tasks, issues, or other entities to provide additional information or updates.

- **Log (Audit Trail) <-> User**
    - *Relationship*: Audit logs record actions taken by users.
    - *Description*: The audit trail keeps a record of all actions taken within the system, including who performed them, for compliance and auditing purposes.

- **Calendar Event <-> Project**
    - *Relationship*: Calendar events are associated with projects.
    - *Description*: Events, meetings, and deadlines scheduled within a project's lifecycle are linked to the project for better project management.

- **Time Track <-> Task**
    - *Relationship*: Time tracking records are associated with tasks.
    - *Description*: Time tracking records are used to record the time spent by users on specific tasks for productivity and billing purposes.

- **Access Control List (ACL) <-> Entity**
    - *Relationship*: ACLs define access permissions for various system entities.
    - *Description*: Access Control Lists specify who has access rights and permissions to view or modify different entities within the system.


#### 4.4. Actions

1. **User Actions:**
   - **Create a new user account:** This action involves gathering user information, including username, email address, and password. It may also include verification and validation steps to ensure data accuracy and security.
   - **Update user profile information:** Users should be able to modify their profile details, such as contact information, profile picture, and personal preferences.
   - **Assign users to teams:** Administrators can assign individual users to specific teams, defining their roles within each team.
   - **Assign roles to users:** Administrators or role managers can assign roles to users, specifying their access permissions and responsibilities.
   - **Remove users from the system:** This action involves deactivating or deleting user accounts, ensuring that their access is revoked and their data is handled according to data retention policies.
   - **Reset user passwords:** Users should have the option to reset their passwords in case they forget them, typically through email verification or security questions.

2. **Task Actions:**
   - **Create a new task within a project:** Users can create tasks, providing task names, descriptions, and other details. They may assign the task to themselves or other team members.
   - **Assign tasks to specific users or teams:** Task owners or project managers can assign tasks to users or teams responsible for completing them.
   - **Set task priorities and due dates:** Users can define task priorities (e.g., high, medium, low) and set due dates to manage task urgency.
   - **Update task status and progress:** Task status can be updated to reflect its current state (e.g., not started, in progress, completed). Users may also track task progress as a percentage.
   - **Add comments or notes to tasks:** Users can leave comments or notes on tasks to provide context, updates, or additional information.
   - **Attach files or documents to tasks:** Relevant files or documents can be attached to tasks for reference or collaboration.
   - **Delete or archive completed tasks:** Completed tasks can be archived or deleted to keep the task list organized.

3. **Project Actions:**
   - **Create a new project:** Project managers or administrators can initiate new projects, defining project names, descriptions, objectives, and other project details.
   - **Define project goals and objectives:** Projects should have clear objectives and goals that outline what needs to be accomplished.
   - **Allocate a budget to the project:** Financial planning involves allocating budgets to projects, specifying the financial resources available.
   - **Assign teams and team members to the project:** Project managers can assign teams to projects and designate team members' roles and responsibilities.
   - **Create project milestones and track their completion:** Milestones represent key project goals and deliverables. Tracking their completion helps monitor project progress.
   - **Manage project risks and mitigation plans:** Risks can be identified, assessed, and managed using a risk management framework.
   - **Schedule calendar events related to the project:** Calendar events, including meetings, deadlines, and milestones, are scheduled to facilitate project planning and coordination.
   - **Monitor project progress and generate reports:** Project managers can monitor various project metrics and generate reports to assess project performance and make informed decisions.

4. **Organization Actions:**
   - **Create and manage organizations:** Administrators can create and manage multiple organizations within the system, each with its own set of users and projects.
   - **Define organizational structure and hierarchy:** Organizations can be structured hierarchically, with different departments, divisions, or branches.
   - **Assign administrators and roles within the organization:** Administrators can designate user roles and responsibilities within the organization, defining who can manage users, projects, and settings.
   - **Set global access control policies for all projects:** Organizations can establish global access control policies, specifying default permissions and rules that apply across all projects.

5. **Team Actions:**
   - **Create new teams for project collaboration:** Project managers or team leaders can create teams, naming and defining their purpose.
   - **Add or remove team members:** Team leaders can manage team membership, adding or removing team members as needed.
   - **Define team roles and responsibilities:** Teams can have specific roles with associated responsibilities to clarify each member's contribution.
   - **Assign teams to specific projects:** Teams can be assigned to projects, and their roles within those projects can be defined.
   - **Monitor team performance and productivity:** Team leaders can track team performance metrics, such as task completion rates and project milestones achieved.

6. **Issue Actions:**
   - **Create new issues or problem reports:** Users can create issue records, describing problems or challenges they encounter during a project.
   - **Assign issues to individuals or teams for resolution:** Issues can be assigned to users or teams responsible for addressing and resolving them.
   - **Track the status of issues and their resolution progress:** Issue statuses can be updated to reflect their current state (e.g., open, in progress, resolved), and progress can be tracked.
   - **Add comments or notes to provide updates on issues:** Users can provide updates and additional information on issues by adding comments or notes.
   - **Attach relevant files or documents to issues:** Attachments can be added to issues to provide supporting documentation or context.

7. **Attachment Actions:**
   - **Upload files or documents to be associated with system entities:** Users can upload files or documents relevant to tasks, projects, or issues.
   - **View and download attached files or documents:** Users can access and download attached files or documents for reference or collaboration.
   - **Update or replace attachments as needed:** Users can edit or replace attachments to keep information up to date.

8. **Comment/Note Actions:**
   - **Add comments or notes to tasks, issues, or other entities for additional context:** Users can add comments or notes to provide context, updates, or discussions related to tasks, issues, or other entities.
   - **Edit or delete comments/notes as necessary:** Users may need the ability to edit or delete their own comments or notes for accuracy or privacy.
   - **Reply to comments for threaded discussions:** Users can engage in threaded discussions by replying to existing comments or notes, fostering collaboration and communication.

9. **Log (Audit Trail) Actions:**
   - **Record all actions taken within the system for compliance and auditing:** The system should automatically record actions, including who performed them, what actions were taken, and when they occurred.
   - **View audit logs to track user activity and changes made to entities:** Authorized users can access audit logs to review system activity and identify any unauthorized or suspicious actions.
   - **Generate audit reports for compliance purposes:** The system should offer reporting capabilities to generate audit reports for compliance, regulatory, or internal auditing purposes.

10. **Calendar Event Actions:**
    - **Schedule events, meetings, and deadlines within project timelines:** Users can create and schedule calendar events, specifying event details, date, time, and participants.
    - **Send notifications and reminders for scheduled events:** Automated notifications and reminders can be sent to participants to ensure they are aware of upcoming events.
    - **Update or cancel calendar events as needed:** Users should have the ability to modify or cancel scheduled events when plans change.

11. **Time Tracking Actions:**
    - **Record and log time spent by users on specific tasks:** Users can log the time they spend working on tasks, projects, or other activities.
   

 - **Generate time tracking reports for productivity analysis and billing purposes:** Time tracking data can be used to generate reports for analyzing user productivity and for billing clients or customers.
    - **Review and approve time tracking entries:** Managers or administrators may need to review and approve time tracking entries to ensure accuracy and compliance with billing or payroll processes.

12. **Access Control Actions:**
    - **Define and configure access control lists (ACLs) for various system entities:** Administrators can create and manage ACLs, specifying who has access rights and permissions for different entities within the system.
    - **Grant or revoke access permissions to users and roles:** Access permissions can be assigned or revoked for individual users or roles, controlling what actions they can perform within the system.
    - **Manage role assignments and permissions within the system:** Administrators can create, modify, or delete roles and define their associated permissions, tailoring access rights to specific user roles and responsibilities.

### 4.5 System Level Roles and Responsibilities:

1. **Admin (Administrator)**:
   - Responsibilities:
     - Configure system settings and preferences.
     - Manage user accounts and permissions.
     - Create and manage organizations or workspaces.
     - Set up and maintain project templates.
     - Generate reports and analytics.
     - Oversee system maintenance and updates.

2. **Co-Admin (Co-Administrator)**:
   - Responsibilities:
     - Assist the primary administrator in system management.
     - Manage user accounts and permissions.
     - Collaborate in configuring system settings.
     - Handle user inquiries and issues.
     - Assist in generating reports and analytics.
     - Participate in system maintenance tasks.

3. **User**:
   - Responsibilities:
     - Create and manage their user profile within the PMS.
     - Access and participate in projects and workspaces.
     - Collaborate with team members on projects and tasks.
     - Create, update, and complete tasks assigned to them.
     - Report issues or challenges encountered during project work.
     - Participate in discussions by adding comments or notes.
     - Contribute to project progress and goals.

### 4.6 Entity Level Roles and Responsibilities:

1. **Owner**:
   - Responsibilities:
     - Create and oversee projects or workspaces.
     - Define project goals, objectives, and scope.
     - Assign tasks and responsibilities to team members.
     - Monitor and manage project progress.
     - Ensure projects are delivered successfully.
     - Make decisions regarding project direction.

2. **Developer**:
   - Responsibilities:
     - Work on technical aspects of projects.
     - Develop software, applications, or solutions.
     - Follow coding standards and best practices.
     - Collaborate with project owners and team members.
     - Contribute to project development and implementation.

3. **Maintainer**:
   - Responsibilities:
     - Maintain and update project content and data.
     - Ensure data accuracy and consistency.
     - Implement content revisions and updates.
     - Assist in resolving project-related issues.
     - Contribute to project quality and maintenance.

4. **Reporter**:
   - Responsibilities:
     - Report issues, errors, or discrepancies within projects.
     - Document problems encountered during project management.
     - Communicate project-related challenges to project owners.
     - Contribute to identifying and addressing issues.

5. **Commenter**:
   - Responsibilities:
     - Add comments and notes to project tasks and discussions.
     - Provide feedback and insights on project content.
     - Engage in discussions related to project tasks and goals.
     - Collaborate with other users to enhance project understanding.

6. **Guest**:
   - Responsibilities:
     - Limited access to view specific project content.
     - Retrieve information from projects as needed.
     - Participate in discussions on projects with read-only access.
     - May not have the ability to modify or create project content.
     - Designed for external parties or stakeholders with restricted access.

These roles and responsibilities provide a structured framework for managing access and collaboration within a (ERMS) while ensuring that users have the appropriate permissions and responsibilities at both the system and entity levels.


### 4.7 Backend
#### 4.7.1 Backend Technologies
   - The backend will be developed using Node.js for its scalability and performance.
   - Custom Libraries will be used for routing purposes
   - MongoDB will serve as the database system due to its flexibility and support for unstructured data.

##### 4.7.1.1 Service Communication
   - The Public Communication will be through REST API, while internal communicatio will be facilitated by a custom event emitter or message broker.
   - This custom event emitter/message broker will allow microservices to communicate internally through asynchronous events, providing a flexible and decoupled way to handle internal actions and notifications within the system.

#### 4.7.2 Backend Microservices

In the microservices architecture of the ERMS backend, various microservices have been developed to handle specific functionalities and responsibilities. Each microservice is designed to be modular and independently scalable, allowing for efficient development and maintenance.

---

#### 4.7.2.1 User Management Microservice

**Description**: 
The User Management Microservice is crucial for managing user-related operations within the Entity Record Management System (ERMS). This microservice is responsible for handling user registration, authentication, profile management, access control, session management, and device control.

**Key Responsibilities**:
1. **User Registration and Authentication**: Manages the process of user registration and login, ensuring secure access to the system.
2. **Profile Management**: Allows users to update their personal and professional information.
3. **Access Control**: Administers role-based access permissions and rights within the system.
4. **Session Management**: Oversees user sessions, ensuring secure and efficient system access.
5. **Device Control**: Manages and monitors the devices used for accessing the system, enhancing security and user experience.

**Events**:
- `REGISTER_USER`: Triggered during the initiation of the user registration process.
- `USER_REGISTERED`: Occurs when a user's registration is successfully completed.
- `USER_REGISTRATION_FAILED`: Triggered if there is a failure in the user registration process.
- `LOGIN_USER`: Activated when a user attempts to log in.
- `USER_LOGGED_IN`: Occurs when a user successfully logs into the system.
- `USER_LOGIN_FAILED`: Triggered if a user's login attempt fails.
- `UPDATE_USER_PROFILE`: Activated when a user begins the profile update process.
- `USER_PROFILE_UPDATED`: Occurs when a user's profile update is successfully completed.
- `USER_PROFILE_UPDATE_FAILED`: Triggered if there is a failure in updating the user's profile.
- `REVOKE_ACCESS_PERMISSION`: Activated when a request to revoke access permissions is made.
- `ACCESS_PERMISSION_REVOKED`: Occurs when access permissions are successfully revoked.
- `ACCESS_PERMISSION_REVOCATION_FAILED`: Triggered if revoking access permissions fails.
- `SESSION_INITIATION`: Triggered when a user session starts.
- `SESSION_TERMINATION`: Activated when a user session ends.
- `DEVICE_REGISTRATION`: Triggered during the registration of a new device for system access.
- `DEVICE_DEACTIVATION`: Activated when a registered device is deactivated or removed from the system.

---
---

#### 4.7.2.2 Task Management Microservice

**Description**: 
The Task Management Microservice plays a pivotal role in the operational efficacy of the Entity Record Management System (ERMS). It is engineered to handle the lifecycle of tasks within projects, facilitating their creation, assignment, monitoring, updating, and closure.

**Key Functionalities**:
1. **Task Creation and Assignment**: Enables users to create and assign tasks, setting up a clear workflow.
2. **Task Tracking**: Offers tools for tracking the progress and status of tasks, enhancing project transparency.
3. **Task Updating**: Allows for modifications to tasks, ensuring they remain relevant and up-to-date.
4. **Comment Management**: Facilitates communication and collaboration through task-related comments.
5. **Attachment Handling**: Manages documents and files attached to tasks for reference or evidence.

**Events**:
- `CREATE_TASK`: Activated during the initiation of task creation.
- `TASK_CREATED`: Occurs when a task is successfully added to the system.
- `TASK_CREATION_FAILED`: Triggered in case of failure during task creation.
- `ASSIGN_TASK`: Activated when a task is being assigned to an individual or a team.
- `TASK_ASSIGNED`: Occurs when a task is successfully assigned.
- `TASK_ASSIGNMENT_FAILED`: Triggered if the task assignment process fails.
- `UPDATE_TASK`: Activated when modifications to a task are initiated.
- `TASK_UPDATED`: Occurs when a task is successfully updated.
- `TASK_UPDATE_FAILED`: Triggered if there is a failure in updating the task.
- `ADD_TASK_COMMENT`: Activated when adding a comment to a task.
- `TASK_COMMENT_ADDED`: Occurs when a comment is successfully attached to a task.
- `TASK_COMMENT_ADDITION_FAILED`: Triggered if adding a comment to a task fails.
- `ADD_TASK_ATTACHMENT`: Activated during the process of attaching a file to a task.
- `TASK_ATTACHMENT_ADDED`: Occurs when an attachment is successfully added to a task.
- `TASK_ATTACHMENT_ADDITION_FAILED`: Triggered if adding an attachment to a task fails.
- `TASK_STATUS_CHANGE`: Activated when there is a change in the task's status (e.g., from 'In Progress' to 'Completed').
- `TASK_PRIORITY_UPDATE`: Triggered when the priority level of a task is modified.
- `TASK_DEADLINE_MODIFICATION`: Activated when changes are made to a task's deadline.

---


#### 4.7.2.3 Project Management Microservice

**Description**: The Project Management Microservice is responsible for the creation and management of projects. It handles project details, milestones, budgets, and team assignments.

**Description**: 
This microservice is the cornerstone for managing and organizing projects within ERMS. It streamlines project setup, tracking, and administration, enabling efficient management of project lifecycles.

**Key Functionalities**:
- Project Initialization: Facilitates the creation of new projects, setting up fundamental project attributes.
- Milestone Management: Manages significant checkpoints within a project's timeline, aiding in progress tracking.
- Budget Handling: Ensures financial aspects of projects are tracked and managed effectively.
- Team Assignment: Allocates teams to projects, aligning resources with project needs.



**Events**:
- `CREATE_PROJECT`: Triggered when a user initiates the creation of a new project.
- `PROJECT_CREATED`: Triggered when a new project is successfully created.
- `PROJECT_CREATION_FAILED`: Triggered when project creation fails.
- `ASSIGN_TEAM_TO_PROJECT`: Triggered when a team is assigned to a project.
- `TEAM_ASSIGNED_TO_PROJECT`: Triggered when a team is successfully assigned to a project.
- `TEAM_ASSIGNMENT_TO_PROJECT_FAILED`: Triggered when assigning a team to a project fails.
- `COMPLETE_PROJECT_MILESTONE`: Triggered when a milestone is completed within a project.
- `PROJECT_MILESTONE_COMPLETED`: Triggered when a project milestone is successfully completed.
- `PROJECT_MILESTONE_COMPLETION_FAILED`: Triggered when completing a project milestone fails.
- `IDENTIFY_PROJECT_RISK`: Triggered when a risk is identified within a project.
- `PROJECT_RISK_IDENTIFIED`: Triggered when a risk is successfully identified within a project.
- `PROJECT_RISK_IDENTIFICATION_FAILED`: Triggered when identifying a project risk fails.
- `SCHEDULE_CALENDAR_EVENT_FOR_PROJECT`: Triggered when a calendar event is scheduled for a project.
- `PROJECT_CALENDAR_EVENT_SCHEDULED`: Triggered when a calendar event is successfully scheduled for a project.
- `PROJECT_CALENDAR_EVENT_SCHEDULING_FAILED`: Triggered when scheduling a calendar event for a project fails.

#### 4.7.2.4 Organization Management Microservice

**Description**: The Organization Management Microservice focuses on managing organizational structures, hierarchies, and user roles within the RMS.

**Key Functionalities**:
- Organization Setup: Allows users to establish and define new organizations.
- Role Definition and Management: Enables the creation and management of various roles within the organization.
- Access Control: Oversees the policies governing access to different project elements within the organization.


**Events**:
- `CREATE_ORGANIZATION`: Triggered when a user initiates the creation of a new organization.
- `ORGANIZATION_CREATED`: Triggered when a new organization is successfully created.
- `ORGANIZATION_CREATION_FAILED`: Triggered when organization creation fails.
- `UPDATE_ORGANIZATION`: Triggered when a user initiates an update to organization details.
- `ORGANIZATION_UPDATED`: Triggered when organization details are successfully updated.
- `ORGANIZATION_UPDATE_FAILED`: Triggered when updating organization details fails.
- `ASSIGN_ADMIN_TO_ORGANIZATION`: Triggered when an administrator is assigned to an organization.
- `ADMIN_ASSIGNED_TO_ORGANIZATION`: Triggered when an administrator is successfully assigned to an organization.
- `ADMIN_ASSIGNMENT_TO_ORGANIZATION_FAILED`: Triggered when assigning an administrator to an organization fails.
- `CREATE_ROLE_IN_ORGANIZATION`: Triggered when a user initiates the creation of a new role within an organization.
- `ROLE_CREATED_IN_ORGANIZATION`: Triggered when a new role is successfully created within an organization.
- `ROLE_CREATION_IN_ORGANIZATION_FAILED`: Triggered when role creation within an organization fails.
- `UPDATE_ACCESS_CONTROL_POLICIES_IN_ORGANIZATION`: Triggered when global access control policies for projects are updated within an organization.
- `ACCESS_CONTROL_POLICIES_UPDATED_IN_ORGANIZATION`: Triggered when global access control policies for projects within an organization are successfully updated.
- `ACCESS_CONTROL_POLICIES_UPDATE_IN_ORGANIZATION_FAILED`: Triggered when updating global access control policies within an organization fails.

#### 4.7.2.5 Team Management Microservice

**Description**: The Team Management Microservice is responsible for creating and managing teams for project collaboration. It defines team roles, memberships, and assignments.

**Key Functionalities**:
- Team Creation: Streamlines the process of forming new teams for collaboration.
- Member Management: Manages adding or removing team members.
- Role Assignment: Facilitates the assignment of specific roles within a team.
- Performance Metrics: Tracks and updates team performance indicators.


**Events**:
- `CREATE_TEAM`: Triggered when a user initiates the creation of a new team.
- `TEAM_CREATED`: Triggered when a new team is successfully created.
- `TEAM_CREATION_FAILED`: Triggered when team creation fails.
- `ADD_MEMBER_TO_TEAM`: Triggered when a user adds a member to a team.
- `TEAM

_MEMBER_ADDED`: Triggered when a member is successfully added to a team.
- `TEAM_MEMBER_ADDITION_FAILED`: Triggered when adding a member to a team fails.
- `REMOVE_MEMBER_FROM_TEAM`: Triggered when a user removes a member from a team.
- `TEAM_MEMBER_REMOVED`: Triggered when a member is successfully removed from a team.
- `TEAM_MEMBER_REMOVAL_FAILED`: Triggered when removing a member from a team fails.
- `UPDATE_TEAM_ROLE`: Triggered when a user initiates an update to team roles and responsibilities.
- `TEAM_ROLE_UPDATED`: Triggered when team roles and responsibilities are successfully updated.
- `TEAM_ROLE_UPDATE_FAILED`: Triggered when updating team roles and responsibilities fails.
- `ASSIGN_TEAM_TO_PROJECT`: Triggered when a team is assigned to a specific project.
- `TEAM_ASSIGNED_TO_PROJECT`: Triggered when a team is successfully assigned to a specific project.
- `TEAM_ASSIGNMENT_TO_PROJECT_FAILED`: Triggered when assigning a team to a specific project fails.
- `UPDATE_TEAM_PERFORMANCE_METRICS`: Triggered when a user initiates an update to team performance metrics.
- `TEAM_PERFORMANCE_METRICS_UPDATED`: Triggered when team performance metrics are successfully updated.
- `TEAM_PERFORMANCE_METRICS_UPDATE_FAILED`: Triggered when updating team performance metrics fails.

#### 4.7.2.6 Issue Management Microservice

**Description**: The Issue Management Microservice handles the creation, assignment, and tracking of issues or problem reports that arise during project lifecycles.

**Key Functionalities**:
- Issue Creation: Provides a platform for logging new issues.
- Assignment and Tracking: Enables the assignment of issues to relevant parties and tracks their resolution status.
- Commenting and Documentation: Allows attachment of comments and documents to issues for detailed context.


**Events**:
- `CREATE_ISSUE`: Triggered when a user initiates the creation of a new issue.
- `ISSUE_CREATED`: Triggered when a new issue is successfully created.
- `ISSUE_CREATION_FAILED`: Triggered when issue creation fails.
- `ASSIGN_ISSUE`: Triggered when an issue is assigned to an individual or team.
- `ISSUE_ASSIGNED`: Triggered when an issue is successfully assigned.
- `ISSUE_ASSIGNMENT_FAILED`: Triggered when issue assignment fails.
- `UPDATE_ISSUE`: Triggered when a user initiates an update to an issue (status, details, etc.).
- `ISSUE_UPDATED`: Triggered when an issue is successfully updated.
- `ISSUE_UPDATE_FAILED`: Triggered when issue updating fails.
- `ADD_ISSUE_COMMENT`: Triggered when a user adds a comment to an issue.
- `ISSUE_COMMENT_ADDED`: Triggered when a comment is successfully added to an issue.
- `ISSUE_COMMENT_ADDITION_FAILED`: Triggered when adding a comment to an issue fails.
- `ADD_ISSUE_ATTACHMENT`: Triggered when a user adds an attachment to an issue.
- `ISSUE_ATTACHMENT_ADDED`: Triggered when an attachment is successfully added to an issue.
- `ISSUE_ATTACHMENT_ADDITION_FAILED`: Triggered when adding an attachment to an issue fails.


#### 4.7.2.7 Attachment Management Microservice

**Description**: The Attachment Management Microservice allows users to upload, view, and manage files or documents associated with various system entities.

**Key Functionalities**:
- File Uploading: Facilitates the uploading of files to the system.
- Viewing and Management: Provides functionalities for viewing and updating existing files.


**Events**:
- `UPLOAD_FILE`: Triggered when a user initiates the upload of a file or document.
- `FILE_UPLOADED`: Triggered when a file or document is successfully uploaded and associated with a system entity.
- `FILE_UPLOAD_FAILED`: Triggered when file upload fails.
- `VIEW_FILE`: Triggered when a user initiates the viewing of a previously uploaded file or document.
- `FILE_VIEWED`: Triggered when a user successfully views a previously uploaded file or document.
- `FILE_VIEW_FAILED`: Triggered when viewing a file or document fails.
- `UPDATE_ATTACHMENT`: Triggered when a user updates or replaces an attachment.
- `ATTACHMENT_UPDATED`: Triggered when an attachment is successfully updated or replaced.
- `ATTACHMENT_UPDATE_FAILED`: Triggered when updating or replacing an attachment fails.

#### 4.7.2.8 Comment/Note Management Microservice

**Description**: The Comment/Note Management Microservice enables users to add comments or notes to tasks, issues, or other entities for additional context, updates, or discussions.

**Key Functionalities**:
- Comment Addition: Enables users to add comments for additional context.
- Editing and Deletion: Offers capabilities to edit or delete comments and replies.


**Events**:
- `ADD_COMMENT`: Triggered when a user initiates the addition of a comment to a task, issue, or entity.
- `COMMENT_ADDED`: Triggered when a comment is successfully added to a task, issue, or entity.
- `COMMENT_ADDITION_FAILED`: Triggered when adding a comment fails.
- `EDIT_COMMENT`: Triggered when a user edits or updates a comment.
- `COMMENT_EDITED`: Triggered when a comment is successfully edited or updated.
- `COMMENT_EDIT_FAILED`: Triggered when editing or updating a comment fails.
- `DELETE_COMMENT`: Triggered when a user initiates the deletion of a comment.
- `COMMENT_DELETED`: Triggered when a comment is successfully deleted.
- `COMMENT_DELETION_FAILED`: Triggered when deleting a comment fails.
- `ADD_REPLY_TO_COMMENT`: Triggered when a user adds a reply to a comment for threaded discussions.
- `REPLY_ADDED_TO_COMMENT`: Triggered when a reply is successfully added to a comment.
- `REPLY_ADDITION_TO_COMMENT_FAILED`: Triggered when adding a reply to a comment fails.

#### 4.7.2.9 Audit Trail Microservice

**Description**: The Audit Trail Microservice records all actions taken within the system for compliance and auditing purposes. It allows authorized users to view audit logs and generate audit reports.

The Audit Trail Microservice is crucial for compliance and transparency, recording actions and changes within ERMS for auditing purposes.


**Events**:
- `RECORD_ACTION`: Triggered when an action is initiated and recorded in the audit trail.
- `ACTION_RECORDED`: Triggered when an action is successfully recorded in the audit trail.
- `ACTION_RECORDING_FAILED`: Triggered when recording an action in the audit trail fails.
- `VIEW_AUDIT_LOGS`: Triggered when authorized users request to view audit logs.
- `AUDIT_LOGS_VIEWED`: Triggered when authorized users successfully view audit logs.
- `AUDIT_LOGS_VIEW_FAILED`: Triggered when viewing audit logs fails.
- `GENERATE_AUDIT_REPORT`: Triggered when authorized users request the generation of an audit report.
- `AUDIT_REPORT_GENERATED`: Triggered when an audit report is successfully generated.
- `AUDIT_REPORT_GENERATION_FAILED`: Triggered when generating an audit report fails.

#### 4.7.2.10 Calendar Event Management Microservice

**Description**: The Calendar Event Management Microservice is responsible for scheduling events, meetings, and deadlines within project timelines. It sends notifications and allows users to update or cancel events.

*Key Functionalities**:
- Event Scheduling: Allows users to schedule various calendar events.
- Notification Management: Sends and manages notifications and reminders for events.
- Event Modification: Provides options to update or cancel scheduled events.

*Key Functionalities**:
- Event Scheduling: Allows users to schedule various calendar events.
- Notification Management: Sends and manages notifications and reminders for events.
- Event Modification: Provides options to update or cancel scheduled events.


**Events**:
- `SCHEDULE_EVENT`: Triggered when a user initiates the scheduling of an event, meeting, or deadline.
- `EVENT_SCHEDULED`: Triggered when an event, meeting, or deadline is successfully scheduled.
- `EVENT_SCHEDULING_FAILED`: Triggered when scheduling an event, meeting, or deadline fails.
- `SEND_NOTIFICATION`: Triggered when notifications and reminders are sent for scheduled events.
- `NOTIFICATION_SENT`: Triggered when notifications and reminders for scheduled events are successfully sent.
- `NOTIFICATION_SENDING_FAILED`: Triggered when sending notifications and reminders fails.
- `UPDATE_EVENT`: Triggered when a user initiates an update or modification to a calendar event.
- `EVENT_UPDATED`: Triggered when a calendar event is successfully updated or modified.
- `EVENT_UPDATE_FAILED`: Triggered when updating a calendar event fails.
- `CANCEL_EVENT`: Triggered when a user initiates the cancellation of a scheduled event.
- `EVENT_CANCELLED`: Triggered when a scheduled event is successfully canceled.
- `EVENT_CANCELLATION_FAILED`: Triggered when canceling a scheduled event fails.

#### 4.7.2.11 Time Tracking Microservice

**Description**: The Time Tracking Microservice records and logs the time spent by users on specific tasks for productivity and billing purposes.

**Key Functionalities**:
- Time Logging: Users can log time spent on specific tasks.
- Billing Record Creation: Facilitates the generation of billing records based on logged time.


**Events**:
- `LOG_TIME`: Triggered when a user logs time spent on a specific task.
- `TIME_LOGGED`: Triggered when time spent on a specific task is successfully logged.
- `TIME_LOGGING_FAILED`: Triggered when logging time spent on a task fails.
- `CREATE_BILLING_RECORD`: Triggered when billing records are created based on time logs.
- `BILLING_RECORD_CREATED`: Triggered when billing records are successfully created.
- `BILLING_RECORD_CREATION_FAILED`: Triggered when creating billing records based on time logs fails.


#### 4.7.2.12 Gateway Service

**Description**: The Gateway Service serves as the entry point for external clients and acts as a reverse proxy to route requests to the appropriate microservices within the system. It handles authentication, load balancing, and routing.

**Events**:
- `EXTERNAL_REQUEST_RECEIVED_EVENT`: Triggered when an external client request is received by the Gateway Service.
- `EXTERNAL_REQUEST_AUTHENTICATED_EVENT`: Triggered when an external client request is successfully authenticated.
- `EXTERNAL_REQUEST_AUTHENTICATION_FAILED_EVENT`: Triggered when authentication of an external client request fails.
- `REQUEST_ROUTED_EVENT`: Triggered when a request is successfully routed to the appropriate microservice.
- `LOAD_BALANCING_EVENT`: Triggered when the Gateway Service performs load balancing to distribute requests.
- `SSL_TERMINATION_EVENT`: Triggered when SSL termination is handled for incoming requests.
- `REQUEST_LOGGED_EVENT`: Triggered when incoming requests are logged for monitoring and analysis.
- `RESPONSE_SENT_EVENT`: Triggered when a response is sent to the external client.


#### 4.7.3 API Gateway

**Description**: The API Gateway serves as the entry point for external clients and acts as a reverse proxy to route requests to the appropriate microservices within the system. It handles authentication, load balancing, and routing.

**Redirections**:

1. **User Management Microservice**:
   - `POST /api-gateway/user/register` (Public): Redirects to `REGISTER_USER` event.
   - `POST /api-gateway/user/login` (Public): Redirects to `LOGIN_USER` event.
   - `POST /api-gateway/user/update-profile` (Private): Redirects to `UPDATE_USER_PROFILE` event.
   - `POST /api-gateway/user/revoke-access` (Restricted): Redirects to `REVOKE_ACCESS_PERMISSION` event.

2. **Task Management Microservice**:
   - `POST /api-gateway/task/create` (Private): Redirects to `CREATE_TASK` event.
   - `POST /api-gateway/task/assign` (Private): Redirects to `ASSIGN_TASK` event.
   - `POST /api-gateway/task/update` (Private): Redirects to `UPDATE_TASK` event.
   - `POST /api-gateway/task/add-comment` (Private): Redirects to `ADD_TASK_COMMENT` event.
   - `POST /api-gateway/task/add-attachment` (Private): Redirects to `ADD_TASK_ATTACHMENT` event.

3. **Project Management Microservice**:
   - `POST /api-gateway/project/create` (Private): Redirects to `CREATE_PROJECT` event.
   - `POST /api-gateway/project/assign-team` (Private): Redirects to `ASSIGN_TEAM_TO_PROJECT` event.
   - `POST /api-gateway/project/complete-milestone` (Private): Redirects to `COMPLETE_PROJECT_MILESTONE` event.
   - `POST /api-gateway/project/identify-risk` (Private): Redirects to `IDENTIFY_PROJECT_RISK` event.
   - `POST /api-gateway/project/schedule-calendar-event` (Private): Redirects to `SCHEDULE_CALENDAR_EVENT_FOR_PROJECT` event.

4. **Organization Management Microservice**:
   - `POST /api-gateway/organization/create` (Private): Redirects to `CREATE_ORGANIZATION` event.
   - `POST /api-gateway/organization/update` (Private): Redirects to `UPDATE_ORGANIZATION` event.
   - `POST /api-gateway/organization/assign-admin` (Private): Redirects to `ASSIGN_ADMIN_TO_ORGANIZATION` event.
   - `POST /api-gateway/organization/create-role` (Private): Redirects to `CREATE_ROLE_IN_ORGANIZATION` event.
   - `POST /api-gateway/organization/update-access-control-policies` (Private): Redirects to `UPDATE_ACCESS_CONTROL_POLICIES_IN_ORGANIZATION` event.

5. **Team Management Microservice**:
   - `POST /api-gateway/team/create` (Private): Redirects to `CREATE_TEAM` event.
   - `POST /api-gateway/team/add-member` (Private): Redirects to `ADD_MEMBER_TO_TEAM` event.
   - `POST /api-gateway/team/remove-member` (Private): Redirects to `REMOVE_MEMBER_FROM_TEAM` event.
   - `POST /api-gateway/team/update-role` (Private): Redirects to `UPDATE_TEAM_ROLE` event.
   - `POST /api-gateway/team/assign-to-project` (Private): Redirects to `ASSIGN_TEAM_TO_PROJECT` event.
   - `POST /api-gateway/team/update-performance-metrics` (Private): Redirects to `UPDATE_TEAM_PERFORMANCE_METRICS` event.

6. **Issue Management Microservice**:
   - `POST /api-gateway/issue/create` (Private): Redirects to `CREATE_ISSUE` event.
   - `POST /api-gateway/issue/assign` (Private): Redirects to `ASSIGN_ISSUE` event.
   - `POST /api-gateway/issue/update` (Private): Redirects to `UPDATE_ISSUE` event.
   - `POST /api-gateway/issue/add-comment` (Private): Redirects to `ADD_ISSUE_COMMENT` event.
   - `POST /api-gateway/issue/add-attachment` (Private): Redirects to `ADD_ISSUE_ATTACHMENT` event.

7. **Attachment Management Microservice**:
   - `POST /api-gateway/attachment/upload` (Private): Redirects to `UPLOAD_FILE` event.
   - `POST /api-gateway/attachment/view` (Private): Redirects to `VIEW_FILE` event.
   - `POST /api-gateway/attachment/update` (Private): Redirects to `UPDATE_ATTACHMENT` event.

8. **Comment/Note Management Microservice**:
   - `POST /api-gateway/comment/add` (Private): Redirects to `ADD_COMMENT` event.
   - `POST /api-gateway/comment/edit` (Private): Redirects to `EDIT_COMMENT` event.
   - `POST /api-gateway/comment/delete` (Private): Redirects to `DELETE_COMMENT` event.
   - `POST /api-gateway/comment/add-reply` (Private): Redirects to `ADD_REPLY_TO_COMMENT` event.

9. **Audit Trail Microservice**:
   - `POST /api-gateway/audit/record-action` (Private): Redirects to `RECORD_ACTION` event.
   - `POST /api-gateway/audit/view-logs` (Private): Redirects to `VIEW_AUDIT_LOGS` event.
   - `POST /api-gateway/audit/generate-report` (Private): Redirects to `GENERATE_AUDIT_REPORT` event.

10. **Calendar Event Management Microservice**:
    - `POST /api-gateway/calendar-event/schedule` (Private): Redirects to `SCHEDULE_EVENT` event.
    - `POST /api-gateway/calendar-event/send-notification` (Private): Redirects to `SEND_NOTIFICATION` event.
    - `POST /api-gateway/calendar-event/update` (Private): Redirects to `UPDATE_EVENT` event.
    - `POST /api-gateway/calendar-event/cancel` (Private): Redirects to `CANCEL_EVENT` event.

11. **Time Tracking Microservice**:
    - `POST /api-gateway/time-tracking/log-time` (Private): Redirects to `LOG_TIME` event.
    - `POST /api-gateway/time-tracking/create-billing-record` (Private): Redirects to `CREATE_BILLING_RECORD` event.

      These flags indicate the access level of each endpoint: 
      - `(Public)` means the endpoint is publicly available.
      - `(Private)` means the endpoint requires user authentication and role-based permissions.
      - `(Restricted)` means the endpoint is restricted and can only be accessed by microservices internally.



#### 4.7.4 Common Libraries (Generic Classes):

1. **`ActionEntity` Library**:
   - **Description**: This library offers methods for operations on various entities within the system, encompassing actions like create, update, retrieve, and delete. These methods are reusable across different microservices and entity types.

2. **`ActionMongo` Library**:
   - **Description**: Provides functions for MongoDB interactions, including inserting documents, querying data, updating records, and deleting entries. It simplifies the complexities of direct database interactions.

3. **`ActionSQL` Library**:
   - **Description**: Handles SQL database operations, offering functions for executing queries, and managing records. It abstracts SQL database intricacies, easing interactions with various SQL systems.

4. **`ActionValidator` Library**:
   - **Description**: A toolkit for data validation and sanitization, ensuring adherence to rules and safety for storage and processing.

5. **`RequestManager` Library**:
   - **Description**: Manages HTTP/HTTPS requests, handling parsing, authentication, authorization, and routing to appropriate microservices.

6. **`ResponseManager` Library**:
   - **Description**: Focuses on generating and sending client responses, formatting data, setting HTTP status codes, and handling errors.

7. **`ActionServer` Library**:
   - **Description**: Responsible for creating and starting HTTP/HTTPS servers, configuring settings, setting up routes, and binding to ports and hostnames.

8. **`EventRouter` Library**:
   - **Description**: Manages event routing, converting RESTful API calls into event-based communication for asynchronous microservice communication.

9. **`ActionRouter` Library** (Similar to Express.js):
   - **Description**: Analogous to Express.js, it defines routes and handlers for incoming HTTP requests, mapping URLs to microservice functions.

10. **`ActionGit` Library**:
    - **Description**: Interfaces with Git repositories, offering functions for cloning, committing, pushing updates, and pulling code, essential for continuous integration and deployment.

11. **`ActionHttpService` Library**:
    - **Description**: Provides tools for making and handling HTTP requests, supporting various methods, managing headers and parameters.

12. **`ActionEvent` Library**:
    - **Description**: Focused on event handling, enabling asynchronous communication between microservices through event publishing and subscribing.

13. **`ActionView` Library**:
    - **Description**: Dedicated to rendering views and user interfaces, including dynamic HTML generation, templating, and data integration.

14. **`ActionEngine` Library**:
    - **Description**: Encapsulates core business logic and processing capabilities, executing algorithms, managing business rules, and data processing tasks.

15. **`ActionFs` Library**:

      **Description**: The ActionFs library is designed to handle file system operations. It provides methods for file creation, reading, writing, deletion, and directory management. This library simplifies interactions with the file system, making it easy to perform file operations across various microservices.


16. **`ActionState` Library**:

      **Description**: The ActionState library manages stateful interactions within the system. It offers functionalities to maintain and manipulate state across different components or microservices. This library ensures consistent state management, crucial for maintaining data integrity and coherence in dynamic environments.


### 4.8 Frontend
#### 4.8.1 Frontend Framework
   - Custom Framework

#### 4.8.2 User Interface (UI) Design
   - UI design will follow modern design principles and adhere to a user-friendly and intuitive layout.
   - Design prototypes will be created using tools like Figma.

#### 4.8.3 Client-Side Routing
   - Client-side routing will be implemented for smoother navigation within the application.
   - React Router will be used for managing routes.

#### 4.8.4 State Management
   - Custom State Management Tool

#### 4.8.5 Responsive Design
   - The user interface will be designed to be responsive, adapting to various screen sizes and devices.

#### 4.8.6 Accessibility
   - Accessibility standards, such as WCAG (Web Content Accessibility Guidelines), will be followed to ensure inclusivity.

#### 4.8.7 Cross-Browser Compatibility
   - The frontend will be tested and optimized for compatibility with major web browsers, including Chrome, Firefox, Safari, and Edge.

#### 4.8.8 Frontend Components

The frontend application is composed of various components, each responsible for specific functionality. Here is a list of the major components along with their types and rendering paths:

| Component Name                 | Type            | Path (Rendering)   |
|--------------------------------|-----------------|---------------------|
| **User Management**            |                 |                     |
| RegistrationForm               | Form            | /register           |
| UserProfile                    | View            | /profile            |
| AccessControl                  | View            | /access-control     |
|--------------------------------|-----------------|---------------------|
| **Task Management**            |                 |                     |
| TaskList                       | Table           | /tasks              |
| TaskDetails                    | View            | /tasks/:taskId      |
| TaskCreationForm               | Form            | /tasks/create       |
| TaskAssignmentForm             | Form            | /tasks/assign       |
| TaskUpdateForm                 | Form            | /tasks/update       |
| TaskComment                    | View            | /tasks/:taskId/comments |
| TaskAttachment                 | View            | /tasks/:taskId/attachments |
|--------------------------------|-----------------|---------------------|
| **Project Management**         |                 |                     |
| ProjectList                    | Table           | /projects           |
| ProjectDetails                 | View            | /projects/:projectId |
| ProjectCreationForm            | Form            | /projects/create    |
| TeamAssignmentForm             | Form            | /projects/:projectId/assign-team |
| MilestoneCompletionForm        | Form            | /projects/:projectId/complete-milestone |
| RiskIdentificationForm         | Form            | /projects/:projectId/identify-risk |
| CalendarEventForm              | Form            | /projects/:projectId/schedule-event |
|--------------------------------|-----------------|---------------------|
| **Organization Management**    |                 |                     |
| OrganizationDetails            | View            | /organizations/:orgId |
| OrganizationCreationForm       | Form            | /organizations/create |
| OrganizationUpdateForm         | Form            | /organizations/:orgId/update |
| AdminAssignmentForm            | Form            | /organizations/:orgId/assign-admin |
| RoleCreationForm               | Form            | /organizations/:orgId/create-role |
| AccessControlPolicyForm        | Form            | /organizations/:orgId/update-access-policy |
|--------------------------------|-----------------|---------------------|
| **Team Management**            |                 |                     |
| TeamList                       | Table           | /teams              |
| TeamDetails                    | View            | /teams/:teamId      |
| TeamCreationForm               | Form            | /teams/create       |
| MemberAdditionForm             | Form            | /teams/:teamId/add-member |
| MemberRemovalForm              | Form            | /teams/:teamId/remove-member |
| TeamRoleUpdateForm             | Form            | /teams/:teamId/update-roles |
| TeamAssignmentToProjectForm    | Form            | /teams/:teamId/assign-to-project |
| TeamPerformanceMetricsForm    | Form            | /teams/:teamId/update-performance-metrics |
|--------------------------------|-----------------|---------------------|
| **Issue Management**           |                 |                     |
| IssueList                      | Table           | /issues             |
| IssueDetails                   | View            | /issues/:issueId   |
| IssueCreationForm              | Form            | /issues/create      |
| IssueAssignmentForm            | Form            | /issues/:issueId/assign |
| IssueUpdateForm                | Form            | /issues/:issueId/update |
| IssueComment                   | View            | /issues/:issueId/comments |
| IssueAttachment                | View            | /issues/:issueId/attachments |
|--------------------------------|-----------------|---------------------|
| **Attachment Management**      |                 |                     |
| FileUploadForm                 | Form            | /attachments/upload |
| AttachmentView                 | View            | /attachments/:attachmentId |
| AttachmentUpdateForm           | Form            | /attachments/:attachmentId/update |
|--------------------------------|-----------------|---------------------|
| **Comment/Note Management**    |                 |                     |
| CommentForm                    | Form            | /comments/create    |
| CommentEditForm                | Form            | /comments/:commentId/edit |
| CommentReplyForm               | Form            | /comments/:commentId/reply |
|--------------------------------|-----------------|---------------------|
| **Audit Trail**                |                 |                     |
| AuditLogViewer                 | Table           | /audit-logs         |
| AuditReportGenerator           | Form            | /audit-reports/generate |
|--------------------------------|-----------------|---------------------|
| **Calendar Event Management**  |                 |                     |
| EventCalendar                  | View            | /events             |
| EventDetails                   | View            | /events/:eventId   |
| EventSchedulingForm            | Form            | /events/schedule    |
| EventUpdateForm                | Form            | /events/:eventId/update |
|--------------------------------|-----------------|---------------------|
| **Time Tracking**              |                 |                     |
| TimeLogForm                   | Form            | /time-logs/log      |
| BillingRecordGenerationForm    | Form            | /billing-records/generate |

These components collectively make up the frontend of the application, providing a user-friendly interface for interacting with the various microservices and features of the system.


#### 4.8.9 Frontend Events

##### User Management Events
1. **RegistrationForm Events**:
   - `FORM_SUBMIT`: Triggered on 'submit' DOM event when the registration form is submitted.
   - `INPUT_CHANGE`: Triggered on 'input' or 'change' DOM events when input fields are modified.
   - `FORM_VALIDATION_ERROR`: Custom event triggered if form validation fails.

2. **UserProfile Events**:
   - `PROFILE_LOAD`: Custom event triggered when a user's profile is loaded.
   - `PROFILE_UPDATE_SUBMIT`: Triggered on 'submit' DOM event when profile update is submitted.
   - `PROFILE_UPDATE_SUCCESS`: Custom event triggered when profile update is successful.
   - `PROFILE_UPDATE_FAIL`: Custom event triggered when profile update fails.

3. **AccessControl Events**:
   - `ACCESS_RIGHTS_CHANGE`: Triggered on 'change' DOM event when access rights are modified.
   - `ACCESS_CONTROL_SAVE`: Triggered on 'click' DOM event when new access settings are saved.

##### Task Management Events
1. **TaskList Events**:
   - `TASK_LIST_LOAD`: Custom event triggered when task list is loaded.
   - `TASK_SELECT`: Triggered on 'click' DOM event when a task is selected from the list.

2. **TaskDetails Events**:
   - `TASK_DETAIL_LOAD`: Custom event triggered when task details are loaded.
   - `TASK_STATUS_UPDATE`: Triggered on 'change' DOM event when task status is updated.

3. **TaskCreationForm Events**:
   - `TASK_CREATION_SUBMIT`: Triggered on 'submit' DOM event when a new task is submitted for creation.
   - `TASK_CREATION_SUCCESS`: Custom event triggered when a new task is successfully created.
   - `TASK_CREATION_FAIL`: Custom event triggered when task creation fails.

##### Project Management Events
1. **ProjectList Events**:
   - `PROJECT_LIST_LOAD`: Custom event triggered when the project list is loaded.
   - `PROJECT_SELECT`: Triggered on 'click' DOM event when a project is selected from the list.

2. **ProjectDetails Events**:
   - `PROJECT_DETAIL_LOAD`: Custom event triggered when project details are loaded.
   - `PROJECT_UPDATE_SUBMIT`: Triggered on 'submit' DOM event when project updates are submitted.

3. **ProjectCreationForm Events**:
   - `PROJECT_CREATION_SUBMIT`: Triggered on 'submit' DOM event when a new project is submitted for creation.
   - `PROJECT_CREATION_SUCCESS`: Custom event triggered when a new project is successfully created.
   - `PROJECT_CREATION_FAIL`: Custom event triggered when project creation fails.

##### Organization Management Events
1. **OrganizationDetails Events**:
   - `ORGANIZATION_LOAD`: Custom event triggered when organization details are loaded.
   - `ORGANIZATION_UPDATE_SUBMIT`: Triggered on 'submit' DOM event when organization updates are submitted.

2. **OrganizationCreationForm Events**:
   - `ORGANIZATION_CREATION_SUBMIT`: Triggered on 'submit' DOM event when a new organization is submitted for creation.
   - `ORGANIZATION_CREATION_SUCCESS`: Custom event triggered when a new organization is successfully created.
   - `ORGANIZATION_CREATION_FAIL`: Custom event triggered when organization creation fails.

##### Additional Events
- **General UI Events**:
   - `NAVIGATION_EVENT`: Custom event triggered during page navigation.
   - `NOTIFICATION_EVENT`: Custom event triggered to show notifications or alerts.
   - `LOADING_EVENT`: Custom event triggered when a loading process starts or ends.



## 5. Guidelines
### 5.1 Folder Structure
### 5.1 Folder Structure (Backend)
   - Design Stage

### 5.1 Folder Structure (Frontend)
   - Design Stage
 

### 5.2 Naming Convention
   - Specify naming conventions for consistency.
   - Examples:
     - Variable names: camelCase
     - Function names: camelCase
     - Component names: PascalCase
     - File names: kebab-case
     - Redux action types: UPPERCASE_SNAKE_CASE
     - Class names: PascalCase

## 6. Testing and Quality Assurance
   - Describe testing strategies and quality assurance practices.
   - Testing will include unit testing, integration testing, and end-to-end testing.
   - Continuous integration and continuous deployment (CI/CD) pipelines will be set up for automated testing and deployment.

## 7. Data Management
   - Outline data management practices.
   - Data will be stored in a MongoDB database.
   - Regular database backups will be performed to prevent data loss.

## 8. Legal and Compliance
   - Ensure legal and regulatory compliance.
   - GDPR compliance will be a priority for data protection.
   - Open-source licenses for third-party libraries will be reviewed for compliance.

## 9. Project Closure and Evaluation
### 9.1 User Documentation
   - Detail user documentation requirements.
   - User manuals and guides will be provided for system users.

### 9.2 Feedback and Improvement
   - Establish a feedback mechanism for users to report issues and suggest improvements.

### 9.3 Code of Conduct
   - Define a code of conduct for project contributors and users.

### 9.4 Knowledge Transfer
   - Document knowledge transfer processes for team members.

### 9.5 Disaster Recovery Plan
   - Develop a disaster recovery plan to ensure data integrity and system availability.

### 9.6 Performance Requirements
   - Specify performance requirements and metrics for monitoring.

### 9.7 Procurement Plan
   - Outline procurement procedures for acquiring software and hardware resources.

### 9.8 Cultural Considerations
   - Address cultural considerations for international users, if applicable.

### 9.9 Events/APIs
   - Describe the events and APIs used for system integration.

### 9.10 Product-Specific Details Key
   - Define key details specific to the product.

## 10. Working of the Software
   - Detail the working of the software, including data flow and user interactions.

## 11. Glossary
   - Include definitions for key terms used in the project.