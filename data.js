let data = [
    {
        "id"    : "array",
        "name"  : "Array",
        "memory": "contiguous",
        "ops"   : [
            {
                "name"  :"search",
                "bigo"  :"O(n)"
            },
            {
                "name"  :"append",
                "bigo"  :"O(n)",
                "note"  :"appending requires creating bigger array and copying all 'n' elements"
            },
            {
                "name"  :"insert",
                "bigo"  :"O(n)",
                "note"  :"inserting requires creating bigger array and copying all 'n' elements"
            },
            {
                "name"  :"delete",
                "bigo"  :"O(n) or O(1)",
                "note"  :"shrinking array requires processing 'n' elements unless it's a 'soft' delete"
            }
        ],
        "aka"   : [ "static array", "linear array", "one-dimensional array" ],
        "lang"  : {
            ".NET"  : "[n]",
            "C++"   : "[n]",
            "Java"  : "[n]",
            "Python": "list",
            "Go"    : "[n]"
        }
    },

    {
        "id"    : "dynamic array",
        "name"  : "Dynamic Array",
        "memory": "contiguous",
        "ops"   : [
            {
                "name"  :"search",
                "bigo"  :"O(n)"
            },
            {
                "name"  :"append",
                "bigo"  :"O(1)",
                "note"  :"it's O(n) when array capacity is full and a new array with higher capacity has to be created with copying of 'n' elements"
            },
            {
                "name"  :"insert",
                "bigo"  :"O(n)",
                "note"  :"inserting requires shifting on average n/2 elements, subject to capacity overflow"
            },
            {
                "name"  :"delete",
                "bigo"  :"O(n) or O(1)",
                "note"  :"same as insert operation unless it's a 'soft' delete"
            }
        ],
        "aka"   : [ "array list", "growable array", "resizable array" ],
        "lang"  : {
            ".NET"  : "List<>",
            "C++"   : "vector<>",
            "Java"  : "ArrayList<>",
            "Python": "list",
            "Go"    : "[] (slice)"
        }
    },

    {
        "id"    : "linkedlist",
        "name"  : "Linked List",
        "memory": "linked",
        "ops"   : [
            {
                "name"  :"search",
                "bigo"  :"O(n)"
            },
            {
                "name"  :"append",
                "bigo"  :"O(n) or O(1)",
                "note"  :"O(n) to iterate until the last element unless a pointer to tail element is stored"
            },
            {
                "name"  :"insert",
                "bigo"  :"O(n)",
                "note"  :"insertion itself is trivial but requires iterating through the list"
            },
            {
                "name"  :"delete",
                "bigo"  :"O(n)",
                "note"  :"same as insert operation"
            }
        ],
        "lang"  : {
            ".NET"  : "LinkedList<>",
            "C++"   : "list<>",
            "Java"  : "LinkedList<>",
            "Python": "deque",
            "Go"    : "container/list"
        }
    },

    {
        "id"    : "hashtable",
        "name"  : "Hash Table",
        "aka"   : [ "hash map", "dictionary" ],
        "ops"   : [
            {
                "name"  :"search",
                "bigo"  :"O(1)",
                "notes" :"unless there is a collision"
            },
            {
                "name"  :"insert",
                "bigo"  :"O(1)"
            },
            {
                "name"  :"delete",
                "bigo"  :"O(1)"
            }
        ],
        "lang"  : {
            ".NET"  : "Dictionary<>",
            "C++"   : "unordered_map<>",
            "Java"  : "HashMap<>",
            "Python": "dict",
            "Go"    : "Map[]"
        }
    }
/*
    {
        "id"    : "queue",
        "name"  : "Queue",
        "ops"   : [
            well... depends how it's implemented, also these ops are somehwat irrelevant
            https://stackoverflow.com/questions/7477181/array-based-vs-list-based-stacks-and-queues
            {
                "name"  :"search",
                "bigo"  :"O(n)",
                "note"  :"since iteration is required otherwise peek/dequeue operation is O(1)"
            },
            {
                "name"  :"append",
                "bigo"  :"",
                "note"  :""
            },
            {
                "name"  :"insert",
                "bigo"  :"",
                "note"  :""
            },
            {
                "name"  :"delete",
                "bigo"  :"",
                "note"  :""
            }
            
        ],
        "adt"   : [ "linked list", "array" ],
        "aka"   : [ "FIFO" ],
        "lang"  : {
            ".NET"  : "Queue<>",
            "C++"   : "queue<>",
            "Java"  : "LinkedList<>",
            "Python": "deque",
            "Go"    : "[] (slice)"
        }
    },

    {
        "id"    : "stack",
        "name"  : "Stack",
        "ops"   : [
            well... depends how it's implemented, also these ops are somehwat irrelevant
            {
                "name"  :"search",
                "bigo"  :"O(n)",
                "note"  :"since iteration is required otherwise peek/pop operation is O(1)"
            },
            {
                "name"  :"append",
                "bigo"  :"",
                "note"  :""
            },
            {
                "name"  :"insert",
                "bigo"  :"",
                "note"  :""
            },
            {
                "name"  :"delete",
                "bigo"  :"",
                "note"  :""
            }
            
        ],
        "adt"   : [ "linked list", "array" ],
        "aka"   : [ "LIFO" ],
        "lang"  : {
            ".NET"  : "Stack<>",
            "C++"   : "stack<>",
            "Java"  : "Stack<>",
            "Python": "deque",
            "Go"    : "[] (slice)"
        }
    }
/*
    /* TODO
    {
        "id"    : "binaryheap",
        "name"  : "Binary Heap",
        "ops"   : { "search":"🤔", "insert":"log2(n)", "delete":"log2(n)" },
        "aka"   : [ "Heap", "Priority Queue" ],
        "lang"  : {
            ".NET"  : "PriorityQueue<>",
            "C++"   : "make_heap",
            "Java"  : "PriorityQueue<>",
            "Python": "heapq"
        }
    }
    */
]