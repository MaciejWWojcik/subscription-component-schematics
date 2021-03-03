import {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';
import * as path from 'path';
import {Schema} from "./schema";


const collectionPath = path.join(__dirname, '../collection.json');
const runner = new SchematicTestRunner('schematics', collectionPath);


describe('custom-component', () => {
    let appTree: UnitTestTree;

    beforeEach(async () => {
        appTree = await runner.runExternalSchematicAsync(
            '@schematics/angular',
            'workspace',
            {
                name: 'workspace',
                version: '0.1',
            },
        ).toPromise();
        appTree = await runner.runExternalSchematicAsync(
            '@schematics/angular',
            'application',
            {
                name: 'app',
                version: '0.1',
            },
            appTree,
        ).toPromise();
    });

    it('works', async () => {
        const options: Schema = {
            name: 'test-name',
            skipImport: true,
            path: 'path',
            style: 'scss',
        };

        const tree = await runner.runSchematicAsync('component', options, appTree).toPromise();
        const files = tree.files;

        expect(files).toContain('/path/test-name/test-name.component.ts');
        expect(files).toContain('/path/test-name/test-name.component.html');
        expect(files).toContain('/path/test-name/test-name.component.scss');
        expect(files).toContain('/path/test-name/test-name.component.spec.ts');
    });
});
