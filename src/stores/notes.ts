import {defineStore} from 'pinia'
import type {Course} from "@/stores/course";

interface Note {
    id: number
    text: string
    course: Course,
    timestamp: Date
}

interface NoteState {
    notes: Note[]
}

export const useNoteStore = defineStore({
    id: 'notes',
    state: (): NoteState => {
        return {
            notes: [
                {
                    id: 0,
                    text: "add lisää",
                    course: {
                        id: 0,
                        name: "versionhallinta"
                    },
                    timestamp: new Date("2022-11-23T13:13:13")
                },
            ],
        }
    },
    getters: {
        getByCourseId: (state) => {
            return (courseId: number) => state.notes.find((note: Note) => Number(note.course.id) === Number(courseId))
        },
    }
    // actions: {
    //     increment() {
    //         //this.counter++
    //     }
    // }
})
