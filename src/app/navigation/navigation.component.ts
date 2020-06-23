import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'rout-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit {
  menuItems: NbMenuItem[] = [
    {
      title: 'HOME',
      icon: 'home-outline',
      link: '/',
      home: true,
    },
    {
      title: 'DESIGN PATTERNS',
      icon: 'folder-outline',
      children: [
        { 
          title: 'Creational',
          icon: 'layers-outline',
          children: [
            { title: 'Abstract Factory', icon: 'file-outline', link: 'designPatterns/creational/abstractFactory' },
            { title: 'Builder', icon: 'file-outline', link: 'designPatterns/creational/builder' },
            { title: 'Factory Method', icon: 'file-outline', link: 'designPatterns/creational/factoryMethod' },
            { title: 'Prototype', icon: 'file-outline', link: 'designPatterns/creational/prototype' },
            { title: 'Singleton', icon: 'file-outline', link: 'designPatterns/creational/singleton' },
          ]
        },
        {
          title: 'Structural',
          icon: 'layers-outline',
          children: [
            { title: 'Adapter', icon: 'file-outline' },
            { title: 'Bridge', icon: 'file-outline' },
            { title: 'Composite', icon: 'file-outline' },
            { title: 'Decorator', icon: 'file-outline' },
            { title: 'Facade', icon: 'file-outline' },
            { title: 'Flyweight', icon: 'file-outline' },
            { title: 'Proxy', icon: 'file-outline' }
          ]
        },
        {
          title: 'Behavioral',
          icon: 'layers-outline',
          children: [
            { title: 'Chain of Responsibility', icon: 'file-outline' },
            { title: 'Command', icon: 'file-outline' },
            { title: 'Interpreter', icon: 'file-outline' },
            { title: 'Iterator', icon: 'file-outline' },
            { title: 'Mediator', icon: 'file-outline' },
            { title: 'Memento', icon: 'file-outline' },
            { title: 'Observer', icon: 'file-outline' },
            { title: 'State', icon: 'file-outline' },
            { title: 'Strategy', icon: 'file-outline' },
            { title: 'Template Method', icon: 'file-outline' },
            { title: 'Visitor', icon: 'file-outline' },
          ]
        }
      ],
    },
    {
      title: 'REFACTORINGS',
      icon: 'folder-outline',
      children: [
        {
          title: 'Composing Methods',
          icon: 'layers-outline',
          children: [
            { title: 'Extract Method', icon: 'file-outline' },
            { title: 'Inline Method', icon: 'file-outline' },
            { title: 'Inline Temp', icon: 'file-outline' },
            { title: 'Replace Temp with Query', icon: 'file-outline' },
            { title: 'Introduce Explaining Variable', icon: 'file-outline' },
            { title: 'Split Temporary Variable', icon: 'file-outline' },
            { title: 'Remove Assignments to Parameters', icon: 'file-outline' },
            { title: 'Replace Method with Method Object', icon: 'file-outline' },
            { title: 'Substitute Algorithm', icon: 'file-outline' }
          ]
        },
        {
          title: 'Moving Features',
          icon: 'layers-outline',
          children: [
            {
              title: 'Move Method',
              icon: 'file-outline'
            },
            {
              title: 'Move Field',
              icon: 'file-outline'
            },
            {
              title: 'Extract Class',
              icon: 'file-outline'
            },
            {
              title: 'Inline Class',
              icon: 'file-outline'
            },
            {
              title: 'Hide Delegate',
              icon: 'file-outline'
            },
            {
              title: 'Remove Middle Man',
              icon: 'file-outline'
            },
            {
              title: 'Introduce Foreign Method',
              icon: 'file-outline'
            },
            {
              title: 'Introduce Local Extension',
              icon: 'file-outline'
            }
          ]
        },
        {
          title: 'Organizing Data',
          icon: 'layers-outline',
          children: [
            {
              title: 'Self Encapsulate Field',
              icon: 'file-outline'
            },
            {
              title: 'replace Data Value with Object',
              icon: 'file-outline'
            },
            {
              title: 'Change Value to Reference',
              icon: 'file-outline'
            },
            {
              title: 'Change Reference to Value',
              icon: 'file-outline'
            },
            {
              title: 'Replace Array with Object',
              icon: 'file-outline'
            },
            {
              title: 'Duplicate Observed Data',
              icon: 'file-outline'
            },
            {
              title: 'Change Unidirectional Association to Bidirectional',
              icon: 'file-outline'
            },
            {
              title: 'Change Bidirectional Association to Unidirectional',
              icon: 'file-outline'
            },
            {
              title: 'Replace Magic Number',
              icon: 'file-outline'
            },
            {
              title: 'Encapsulate Field',
              icon: 'file-outline'
            },
            {
              title: 'Encapsulate Collection',
              icon: 'file-outline'
            },
            {
              title: 'Replace Record with Data Class',
              icon: 'file-outline'
            },
            {
              title: 'Replace Type Code with Class',
              icon: 'file-outline'
            },
            {
              title: 'Replace Type Code with Subclass',
              icon: 'file-outline'
            },
            {
              title: 'Replace Type Code with State/Strategy',
              icon: 'file-outline'
            },
            {
              title: 'Replace Subclass with Fields',
              icon: 'file-outline'
            }
          ]
        },
        {
          title: 'Simplify Conditional',
          icon: 'layers-outline',
          children: [
            {
              title: 'Decompose Conditional',
              icon: 'file-outline'
            },
            {
              title: 'Consolidate Conditional Expression',
              icon: 'file-outline'
            },
            {
              title: 'Consolidate Duplicate Conditional Fragments',
              icon: 'file-outline'
            },
            {
              title: 'Remove Control Flag',
              icon: 'file-outline'
            },
            {
              title: 'Replace Nested Conditional with Guard',
              icon: 'file-outline'
            },
            {
              title: 'Replace Conditional with Polymorphism',
              icon: 'file-outline'
            },
            {
              title: 'Introduce Null Object',
              icon: 'file-outline'
            },
            {
              title: 'Introduce Assertion',
              icon: 'file-outline'
            }
          ]
        },
        {
          title: 'Simplify Method Calls',
          icon: 'layers-outline',
          children: [
            {
              title: 'Rename Method',
              icon: 'file-outline'
            },
            {
              title: 'Add Parameter',
              icon: 'file-outline'
            },
            {
              title: 'Remove Parameter',
              icon: 'file-outline'
            },
            {
              title: 'Separate Query from Modifier',
              icon: 'file-outline'
            },
            {
              title: 'Parameterize Method',
              icon: 'file-outline'
            },
            {
              title: 'Replace Parameter with Explicit Methods',
              icon: 'file-outline'
            },
            {
              title: 'Preserve Whole Object',
              icon: 'file-outline'
            },
            {
              title: 'Replace Parameter with Method',
              icon: 'file-outline'
            },
            {
              title: 'Introduce Parameter Object',
              icon: 'file-outline'
            },
            {
              title: 'Remove Setting Method',
              icon: 'file-outline'
            },
            {
              title: 'Hide Method',
              icon: 'file-outline'
            },
            {
              title: 'Replace Constructor with Factory Method',
              icon: 'file-outline'
            },
            {
              title: 'Encapsulate Downcast',
              icon: 'file-outline'
            },
            {
              title: 'Replace Error Code with Exception',
              icon: 'file-outline'
            },
            {
              title: 'Replace Exception with Test',
              icon: 'file-outline'
            }
          ]
        },
        {
          title: 'Dealing with Generalization',
          icon: 'layers-outline',
          children: [
            {
              title: 'Pull up field',
              icon: 'file-outline'
            },
            {
              title: 'Pull up Method',
              icon: 'file-outline'
            },
            {
              title: 'Pull up Constructor Body',
              icon: 'file-outline'
            },
            {
              title: 'Pull Down Method',
              icon: 'file-outline'
            },
            {
              title: 'Pull Down Field',
              icon: 'file-outline'
            },
            {
              title: 'Extract Subclass',
              icon: 'file-outline'
            },
            {
              title: 'Extract Superclass',
              icon: 'file-outline'
            },
            {
              title: 'Extract Interface',
              icon: 'file-outline'
            },
            {
              title: 'Collapse Hierarchy',
              icon: 'file-outline'
            },
            {
              title: 'Form Template Method',
              icon: 'file-outline'
            },
            {
              title: 'Replace Inheritance with Delegation',
              icon: 'file-outline'
            },
            {
              title: 'Replace Delegation with Inheritance',
              icon: 'file-outline'
            }
          ]
        },
        {
          title: 'Big Refactorings',
          icon: 'layers-outline',
          children: [
            { title: 'Tease Apart Inheritance', icon: 'file-outline' },
            { title: 'Convert Procedural Design to Objects', icon: 'file-outline' },
            { title: 'Separate Domain from Presentation', icon: 'file-outline' },
            { title: 'Extract Hierarchy', icon: 'file-outline' }
          ]
        }
      ]
    },
    {
      title: 'REFACTORING TO PATTERNS',
      icon: 'folder-outline',
      children: [
        {
          title: 'Creation',
          icon: 'layers-outline',
          children: [
            {
              title: 'Replace Constructors with Creation Methods',
              icon: 'file-outline'
            },
            {
              title: 'Move Creation Knowledge to Factory',
              icon: 'file-outline'
            },
            {
              title: 'Encapsulate Classes with Factory',
              icon: 'file-outline'
            },
            {
              title: 'Introduce Polymorphic Creation with Factory Method',
              icon: 'file-outline'
            },
            {
              title: 'Encapsulate Composite with Builder',
              icon: 'file-outline'
            },
            {
              title: 'Inline Singleton',
              icon: 'file-outline'
            }
          ]
        },
        {
          title: 'Simplification',
          icon: 'layers-outline',
          children: [
            {
              title: 'Compose Method',
              icon: 'file-outline'
            },
            {
              title: 'Replace Conditional Logic with Strategy',
              icon: 'file-outline'
            },
            {
              title: 'Move Embellishment to Decorator',
              icon: 'file-outline'
            },
            {
              title: 'Replace State-Altering Conditionals with State',
              icon: 'file-outline'
            },
            {
              title: 'Replace Implicit Tree with Composite',
              icon: 'file-outline'
            },
            {
              title: 'Replace Conditional Dispatcher with Command',
              icon: 'file-outline'
            }
          ]
        },
        {
          title: 'Generalization',
          icon: 'layers-outline',
          children: [
            {
              title: 'Form Template Method',
              icon: 'file-outline'
            },
            {
              title: 'Extract Composite',
              icon: 'file-outline'
            },
            {
              title: 'Replace One/many Distinctions with Composite',
              icon: 'file-outline'
            },
            {
              title: 'Replace Hard-Coded Notifications with Observer',
              icon: 'file-outline'
            },
            {
              title: 'Unify Interfaces with Adapter',
              icon: 'file-outline'
            },
            {
              title: 'Extract Adapter',
              icon: 'file-outline'
            },
            {
              title: 'Replace Implicit Language with Interpreter',
              icon: 'file-outline'
            }
          ]
        },
        {
          title: 'Protection',
          icon: 'layers-outline',
          children: [
            {
              title: 'Replace Type Code with Class',
              icon: 'file-outline'
            },
            {
              title: 'Limit Instantiation with Singleton',
              icon: 'file-outline'
            },
            {
              title: 'Introduce Null Object',
              icon: 'file-outline'
            }
          ]
        },
        {
          title: 'Accumulation',
          icon: 'layers-outline',
          children: [
            {
              title: 'Move Accumulation to Collecting Parameter',
              icon: 'file-outline'
            },
            {
              title: 'Move Accumulation to Visitor',
              icon: 'file-outline'
            }
          ]
        },
        {
          title: 'Utilities',
          icon: 'layers-outline',
          children: [
            {
              title: 'Chain Constructors',
              icon: 'file-outline'
            },
            {
              title: 'Unify Interfaces',
              icon: 'file-outline'
            },
            {
              title: 'Extract Parameter',
              icon: 'file-outline'
            }
          ]
        }
      ]
    },
    {
      title: 'ENTERPRISE PATTERNS',
      icon: 'folder-outline',
      children: [
        {
          title: 'Domain Logic',
          icon: 'layers-outline',
          children: [
            {
              title: 'Transaction Script',
              icon: 'file-outline'
            },
            {
              title: 'Domain Model',
              icon: 'file-outline'
            },
            {
              title: 'Table Module',
              icon: 'file-outline'
            },
            {
              title: 'Service Layer',
              icon: 'file-outline'
            }
          ]
        },
        {
          title: 'Data Source',
          icon: 'layers-outline',
          children: [
            {
              title: 'Table Data Gateway',
              icon: 'file-outline'
            },
            {
              title: 'Row Data Gateway',
              icon: 'file-outline'
            },
            {
              title: 'Active Record',
              icon: 'file-outline'
            },
            {
              title: 'Data Mapper',
              icon: 'file-outline'
            }
          ]
        },
        {
          title: 'Behavioral Object-Relational',
          icon: 'layers-outline',
          children: [
            {
              title: 'Unit of Work',
              icon: 'file-outline'
            },
            {
              title: 'Identity Map',
              icon: 'file-outline'
            },
            {
              title: 'Lazy Load',
              icon: 'file-outline'
            }
          ]
        },
        {
          title: 'Structural Object-Relational',
          icon: 'layers-outline',
          children: [
            {
              title: 'Identity Field',
              icon: 'file-outline'
            },
            {
              title: 'Foreign Key Mapping',
              icon: 'file-outline'
            },
            {
              title: 'Association Table Mapping',
              icon: 'file-outline'
            },
            {
              title: 'Dependent Mapping',
              icon: 'file-outline'
            },
            {
              title: 'Embedded Value',
              icon: 'file-outline'
            },
            {
              title: 'Serialized LOB',
              icon: 'file-outline'
            },
            {
              title: 'Single Table Inheritance',
              icon: 'file-outline'
            },
            {
              title: 'Class Table Inheritance',
              icon: 'file-outline'
            },
            {
              title: 'Concrete Table Inheritance',
              icon: 'file-outline'
            },
            {
              title: 'Inheritance Mappers',
              icon: 'file-outline'
            }
          ]
        },
        {
          title: 'Metadata Mapping Object-Relational',
          icon: 'layers-outline',
          children: [
            {
              title: 'Metadata Mapping',
              icon: 'file-outline'
            },
            {
              title: 'Query Object',
              icon: 'file-outline'
            },
            {
              title: 'Repository',
              icon: 'file-outline'

            }
          ]
        },
        {
          title: 'Web Presentation Patterns',
          icon: 'layers-outline',
          children: [
            {
              title: 'Model View Controller',
              icon: 'file-outline'
            },
            {
              title: 'Page Controller',
              icon: 'file-outline'
            },
            {
              title: 'Front Controller',
              icon: 'file-outline'
            },
            {
              title: 'Template View',
              icon: 'file-outline'
            },
            {
              title: 'Transform View',
              icon: 'file-outline'
            },
            {
              title: 'Two Step View',
              icon: 'file-outline'
            },
            {
              title: 'Application Controller',
              icon: 'file-outline'
            }
          ]
        },
        {
          title: 'Distribution',
          icon: 'layers-outline',
          children: [
            {
              title: 'Remote Facade',
              icon: 'file-outline'
            },
            {
              title: 'Data Transfer Object',
              icon: 'file-outline'
            }
          ]
        },
        {
          title: 'Offline Concurrency',
          icon: 'layers-outline',
          children: [
            {
              title: 'Optimistic Offline Lock',
              icon: 'file-outline'
            },
            {
              title: 'Pessimistic Offline Lock',
              icon: 'file-outline'
            },
            {
              title: 'Coarse-Grained Lock',
              icon: 'file-outline'
            },
            {
              title: 'Implicit Lock',
              icon: 'file-outline'
            }
          ]
        },
        {
          title: 'Session State Patterns',
          icon: 'layers-outline',
          children: [
            {
              title: 'Client Session State',
              icon: 'file-outline'
            },
            {
              title: 'Server Session State',
              icon: 'file-outline'
            },
            {
              title: 'Database Session State',
              icon: 'file-outline'
            }
          ]
        },
        {
          title: 'Base Patterns',
          icon: 'layers-outline',
          children: [
            {
              title: 'Gateway',
              icon: 'file-outline'
            },
            {
              title: 'Mapper',
              icon: 'file-outline'
            },
            {
              title: 'Layer Supertype',
              icon: 'file-outline'
            },
            {
              title: 'Separated Interface',
              icon: 'file-outline'
            },
            {
              title: 'Registry',
              icon: 'file-outline'
            },
            {
              title: 'Value Object',
              icon: 'file-outline'
            },
            {
              title: 'Money',
              icon: 'file-outline'
            },
            {
              title: 'Special Case',
              icon: 'file-outline'
            },
            {
              title: 'Plugin',
              icon: 'file-outline'
            },
            {
              title: 'Service Stub',
              icon: 'file-outline'
            },
            {
              title: 'Record Set',
              icon: 'file-outline'
            }
          ]
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
    
  }

}
