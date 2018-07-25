import { Component , OnInit} from '@angular/core';
import { AuthService} from '../../shared/services';

@Component({
    moduleId:'CoursesModule',
    selector:'course-grid',
    templateUrl:'./grid.component.html',
    styleUrls:['./grid.component.scss'],
})

export class GridComponent  {
  isAuthenticated = false;

  constructor(public authService: AuthService) {
    this.isAuthenticated = !this.authService.isAuthenticated();
  }

  data=
  [
    {
      "courseName": "Java",
      "courseId": "java",
      "courseImage": "/assets/img/Java.png",
      "topic": [
        {
          "topicId": "collections-in-java",
          "topicName": "Collections In Java",
          "author": "Gokul Pandey",
          "questions": {
            "basic": [
              {
                "question": "What are collections in java?",
                "answer": "Collection is java is a framework that adds an capability store/manipulate java objects."
              }
            ],
            "intermediate": [
              {
                "question": "What are collections in java?",
                "answer": "Collection is java is a framework that adds an capability store/manipulate java objects."
              }
            ],
            "expert": [
              {
                "question": "What are collections in java?",
                "answer": "Collection is java is a framework that adds an capability store/manipulate java objects."
              }
            ],
            "caseStudy": [
              {
                "question": "What are collections in java?",
                "answer": "Collection is java is a framework that adds an capability store/manipulate java objects."
              }
            ]
          },
          "references": [
            {
              "tutorialReferences": [
                "https://www.tutorialspoint.com/index.htm",
                "https://www.geeksforgeeks.org"
              ]
            },
            {
              "videoReferences": [
                "https://app.pluralsight.com"
              ]
            },
            {
              "openSourceReferences": []
            }
          ],
          "relatedTopics": {
            "incourse": [
              "collection002",
              "collection003"
            ],
            "outCourse": [
              "hybris/flexibleSearch001",
              "hybris/impex002"
            ]
          }
        }
      ]
    },
    {
      "courseName": "Angular",
      "courseId": "angular",
      "courseImage": "/assets/img/Angular.png",
      "topic": [
        {
          "topicId": "modules-in-angular",
          "topicName": "Modules In Angular",
          "author": "Gokul Pandey",
          "questions": {
            "basic": [
              {
                "question": "What are collections in java?",
                "answer": "Collection is java is a framework that adds an capability store/manipulate java objects."
              }
            ],
            "intermediate": [
              {
                "question": "What are collections in java?",
                "answer": "Collection is java is a framework that adds an capability store/manipulate java objects."
              }
            ],
            "expert": [
              {
                "question": "What are collections in java?",
                "answer": "Collection is java is a framework that adds an capability store/manipulate java objects."
              }
            ],
            "caseStudy": [
              {
                "question": "What are collections in java?",
                "answer": "Collection is java is a framework that adds an capability store/manipulate java objects."
              }
            ]
          },
          "references": [
            {
              "tutorialReferences": [
                "https://www.tutorialspoint.com/index.htm",
                "https://www.geeksforgeeks.org"
              ]
            },
            {
              "videoReferences": [
                "https://app.pluralsight.com"
              ]
            },
            {
              "openSourceReferences": []
            }
          ],
          "relatedTopics": {
            "incourse": [
              "collection002",
              "collection003"
            ],
            "outCourse": [
              "hybris/flexibleSearch001",
              "hybris/impex002"
            ]
          }
        }
      ]
    },
    {
      "courseName": "Spring",
      "courseId": "spring",
      "courseImage": "/assets/img/Spring.png",
      "topic": [
        {
          "topicId": "spring-security",
          "topicName": "Spring Security",
          "author": "Gokul Pandey",
          "questions": {
            "basic": [
              {
                "question": "What are collections in java?",
                "answer": "Collection is java is a framework that adds an capability store/manipulate java objects."
              }
            ],
            "intermediate": [
              {
                "question": "What are collections in java?",
                "answer": "Collection is java is a framework that adds an capability store/manipulate java objects."
              }
            ],
            "expert": [
              {
                "question": "What are collections in java?",
                "answer": "Collection is java is a framework that adds an capability store/manipulate java objects."
              }
            ],
            "caseStudy": [
              {
                "question": "What are collections in java?",
                "answer": "Collection is java is a framework that adds an capability store/manipulate java objects."
              }
            ]
          },
          "references": [
            {
              "tutorialReferences": [
                "https://www.tutorialspoint.com/index.htm",
                "https://www.geeksforgeeks.org"
              ]
            },
            {
              "videoReferences": [
                "https://app.pluralsight.com"
              ]
            },
            {
              "openSourceReferences": []
            }
          ],
          "relatedTopics": {
            "incourse": [
              "collection002",
              "collection003"
            ],
            "outCourse": [
              "hybris/flexibleSearch001",
              "hybris/impex002"
            ]
          }
        }
      ]
    },
    {
      "courseName": "Hybris",
      "courseId": "hybris",
      "courseImage": "/assets/img/Hybris.png",
      "topic": [
        {
          "topicId": "collections-in-java",
          "topicName": "Collections In Java",
          "author": "Gokul Pandey",
          "questions": {
            "basic": [
              {
                "question": "What are collections in java?",
                "answer": "Collection is java is a framework that adds an capability store/manipulate java objects."
              }
            ],
            "intermediate": [
              {
                "question": "What are collections in java?",
                "answer": "Collection is java is a framework that adds an capability store/manipulate java objects."
              }
            ],
            "expert": [
              {
                "question": "What are collections in java?",
                "answer": "Collection is java is a framework that adds an capability store/manipulate java objects."
              }
            ],
            "caseStudy": [
              {
                "question": "What are collections in java?",
                "answer": "Collection is java is a framework that adds an capability store/manipulate java objects."
              }
            ]
          },
          "references": [
            {
              "tutorialReferences": [
                "https://www.tutorialspoint.com/index.htm",
                "https://www.geeksforgeeks.org"
              ]
            },
            {
              "videoReferences": [
                "https://app.pluralsight.com"
              ]
            },
            {
              "openSourceReferences": []
            }
          ],
          "relatedTopics": {
            "incourse": [
              "collection002",
              "collection003"
            ],
            "outCourse": [
              "hybris/flexibleSearch001",
              "hybris/impex002"
            ]
          }
        }
      ]
    },
    {
      "courseName": "Java Script",
      "courseId": "java-script",
      "courseImage": "/assets/img/Javascript.png",
      "topic": [
        {
          "topicId": "collections-in-java",
          "topicName": "Collections In Java",
          "author": "Gokul Pandey",
          "questions": {
            "basic": [
              {
                "question": "What are collections in java?",
                "answer": "Collection is java is a framework that adds an capability store/manipulate java objects."
              }
            ],
            "intermediate": [
              {
                "question": "What are collections in java?",
                "answer": "Collection is java is a framework that adds an capability store/manipulate java objects."
              }
            ],
            "expert": [
              {
                "question": "What are collections in java?",
                "answer": "Collection is java is a framework that adds an capability store/manipulate java objects."
              }
            ],
            "caseStudy": [
              {
                "question": "What are collections in java?",
                "answer": "Collection is java is a framework that adds an capability store/manipulate java objects."
              }
            ]
          },
          "references": [
            {
              "tutorialReferences": [
                "https://www.tutorialspoint.com/index.htm",
                "https://www.geeksforgeeks.org"
              ]
            },
            {
              "videoReferences": [
                "https://app.pluralsight.com"
              ]
            },
            {
              "openSourceReferences": []
            }
          ],
          "relatedTopics": {
            "incourse": [
              "collection002",
              "collection003"
            ],
            "outCourse": [
              "hybris/flexibleSearch001",
              "hybris/impex002"
            ]
          }
        }
      ]
    },
    {
      "courseName": "Sql",
      "courseId": "sql",
      "courseImage": "/assets/img/Sql.png",
      "topic": [
        {
          "topicId": "collections-in-java",
          "topicName": "Collections In Java",
          "author": "Gokul Pandey",
          "questions": {
            "basic": [
              {
                "question": "What are collections in java?",
                "answer": "Collection is java is a framework that adds an capability store/manipulate java objects."
              }
            ],
            "intermediate": [
              {
                "question": "What are collections in java?",
                "answer": "Collection is java is a framework that adds an capability store/manipulate java objects."
              }
            ],
            "expert": [
              {
                "question": "What are collections in java?",
                "answer": "Collection is java is a framework that adds an capability store/manipulate java objects."
              }
            ],
            "caseStudy": [
              {
                "question": "What are collections in java?",
                "answer": "Collection is java is a framework that adds an capability store/manipulate java objects."
              }
            ]
          },
          "references": [
            {
              "tutorialReferences": [
                "https://www.tutorialspoint.com/index.htm",
                "https://www.geeksforgeeks.org"
              ]
            },
            {
              "videoReferences": [
                "https://app.pluralsight.com"
              ]
            },
            {
              "openSourceReferences": []
            }
          ],
          "relatedTopics": {
            "incourse": [
              "collection002",
              "collection003"
            ],
            "outCourse": [
              "hybris/flexibleSearch001",
              "hybris/impex002"
            ]
          }
        }
      ]
    }
  ]

  //data ends here
}